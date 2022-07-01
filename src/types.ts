export type Quest = {
  id: string;
  name: string;
  modified_at: Date;
  complete?: boolean;
};

export type Project = {
  id: string;
  name: string;
  modified_at: Date;
  created_at: Date;
  quests: Array<Quest>;
};
