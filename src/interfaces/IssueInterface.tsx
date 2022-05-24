export interface User {
  id: number;
  name: string;
  email: string;
  teamName: string;
  desination: string;
}

export interface IssueInterface {
  id: string;
  summary: string;
  type: number;
  projectID: string;
  description: string;
  priority: number;
  assignee: User;
  tags: Array<string>;
  sprint: string;
  storyPoint: string;
  status: number;
  createdBy: User;
  createdOn: string;
  updatedBy: User;
  updatedOn: string;
}

export interface IssueCardProps {
  issue: IssueInterface;
}
