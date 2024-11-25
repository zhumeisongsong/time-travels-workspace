export type TaskEntity = {
  id: string;
  name: string;
  description?: string;
  categories: {
    id: string;
    name: string;
  }[];
};
