import IssueCard from '../../assets/UIElements/IssueCard/IssueCard';
import { IssueInterface, IssueProps } from '../../interfaces/IssueInterface';

import './Issue.scss';

const Issue: React.FC<IssueProps> = ({
  issues,
  priority,
  assigneeId,
}: IssueProps) => {
  let updatedIssues = issues;

  //Filtering on the basis of priority and/or assignee
  if (priority !== -1 && assigneeId !== -1) {
    updatedIssues = issues?.filter(
      (issue) => issue.priority === priority && issue.assignee.id === assigneeId
    );
    console.log(updatedIssues);
  } else if (priority !== -1) {
    updatedIssues = issues?.filter((issue) => issue.priority === priority);
  } else if (assigneeId !== -1) {
    updatedIssues = issues?.filter((issue) => issue.assignee.id === assigneeId);
  }

  //Filtering the issues on the basis of status
  const todoFilteredArray = updatedIssues?.filter(
    (issue: IssueInterface) => issue.type === 1
  );
  const developmentFilteredArray = updatedIssues?.filter(
    (issue: IssueInterface) => issue.type === 2
  );
  const testingFilteredArray = updatedIssues?.filter(
    (issue: IssueInterface) => issue.type === 3
  );
  const completedFilteredArray = updatedIssues?.filter(
    (issue: IssueInterface) => issue.type === 4
  );

  return (
    <>
      <div id="issue_container">
        <div className="issue_wrapper">
          <div id="todo">
            <span className="text">TO DO</span>
            {todoFilteredArray?.map((issue) => (
              <IssueCard issue={issue} key={issue.id} />
            ))}
          </div>
          <div id="development">
            <span className="text">DEVELOPMENT</span>
            {developmentFilteredArray?.map((issue) => (
              <IssueCard issue={issue} key={issue.id} />
            ))}
          </div>
          <div id="testing">
            <span className="text">TESTING</span>
            {testingFilteredArray?.map((issue) => (
              <IssueCard issue={issue} key={issue.id} />
            ))}
          </div>
          <div id="completed">
            <span className="text">COMPLETED</span>
            {completedFilteredArray?.map((issue) => (
              <IssueCard issue={issue} key={issue.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Issue;
