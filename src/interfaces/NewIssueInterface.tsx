export default interface NewIssueInterface {
  summary: string;
  type: number;
  projectID: string;
  description: string;
  priority: number;
  status: number;
  assignee: string;
  tags: Array<string>;
  sprint: string;
  storyPoint: string;
}

export interface NewIssueResponseInterface {
  message: string;
  issueId: string;
}
