import { User } from './IssueInterface';

export default interface ProjectInterface {
  projectID: string;
  projectName: string;
  projectStartDate: string;
  projectEndDate: string;
  projectOwner: User;
}
