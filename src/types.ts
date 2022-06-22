export type Quest = {
  id: string;
  name: string;
  created_at: Date;
};

export type Project = {
  id: string;
  name: string;
  quests: Array<Quest>;
};
