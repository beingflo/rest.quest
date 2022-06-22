export type Quest = {
  id: string;
  name: string;
  created_at: Date;
  complete?: boolean;
};

export type Project = {
  id: string;
  name: string;
  quests: Array<Quest>;
};
