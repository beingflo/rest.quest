import { AwsClient } from "aws4fetch";
import { setState } from "./store";

const StateFile = "rq-state.json";

export const s3Sync = async (state: any) => {
  if (!state?.s3) {
    console.info("No credentials for syncing");
    return [, , ,];
  }

  const aws = new AwsClient({
    accessKeyId: state?.s3?.apiKey,
    secretAccessKey: state?.s3?.apiSecretKey,
    service: "s3",
    region: state?.s3?.region,
  });

  console.info("Sync state");

  let remoteState = { questList: [], projectList: [] };
  const stateResponse = await aws.fetch(`${state?.s3?.endpoint}${StateFile}`, {
    method: "GET",
    headers: { "Cache-Control": "no-store" },
  });
  if (stateResponse.ok) {
    remoteState = await stateResponse.json();
  }

  const [mergedProjects, newLocal, newRemote, droppedLocal, droppedRemote] =
    mergeState(state.projectList, remoteState.projectList);
  const [mergedQuests, newLocalQ, newRemoteQ, droppedLocalQ, droppedRemoteQ] =
    mergeState(state.questList, remoteState.questList);

  mergedProjects.sort((a, b) => a.modifiedAt - b.modifiedAt);
  mergedQuests.sort((a, b) => a.createdAt - b.createdAt);

  setState({
    projectList: [...mergedProjects],
    questList: [...mergedQuests],
  });

  await aws.fetch(`${state?.s3?.endpoint}${StateFile}`, {
    method: "PUT",
    body: JSON.stringify({
      projectList: mergedProjects,
      questList: mergedQuests,
    }),
  });

  return [
    newLocal + newLocalQ,
    newRemote + newRemoteQ,
    droppedLocal + droppedLocalQ,
    droppedRemote + droppedRemoteQ,
  ];
};

export const mergeState = (
  local = [],
  remote = []
): [Array<any>, number, number, number, number] => {
  const merged = [];
  let newLocal = 0;
  let newRemote = 0;
  let droppedLocal = 0;
  let droppedRemote = 0;

  // Add items that are only remote
  remote?.forEach((item) => {
    if (!local?.find((s) => s.id === item.id)) {
      merged.push(item);
      newRemote += 1;
    }
  });

  // Add item that are only local
  local?.forEach((item) => {
    if (!remote?.find((s) => s.id === item.id)) {
      merged.push(item);
      newLocal += 1;
    }
  });

  // From item that appear in both, take the one that has been modified last
  local?.forEach((localItem) => {
    const remoteItem = remote?.find((l) => l.id === localItem.id);
    if (remoteItem) {
      if (localItem?.modifiedAt < remoteItem.modifiedAt) {
        merged.push(remoteItem);
        console.info(`Dropping old local: ${JSON.stringify(localItem)}`);
        droppedLocal += 1;
      } else if (localItem.modifiedAt > remoteItem.modifiedAt) {
        merged.push(localItem);
        console.info(`Dropping old remote: ${JSON.stringify(remoteItem)}`);
        droppedRemote += 1;
      } else {
        merged.push(localItem);
      }
    }
  });

  return [merged, newLocal, newRemote, droppedLocal, droppedRemote];
};
