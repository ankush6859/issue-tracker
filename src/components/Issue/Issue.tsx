import { useTranslation } from 'react-i18next';
import IssueCard from '../../assets/UIElements/IssueCard/IssueCard';
import { IssueInterface, IssueProps } from '../../interfaces/IssueInterface';

import './Issue.scss';

const Issue: React.FC<IssueProps> = ({
  issues,
  priority,
  assigneeId,
}: IssueProps) => {
  let updatedIssues = issues;

  const { t } = useTranslation();

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
    (issue: IssueInterface) => issue.status === 1
  );
  const developmentFilteredArray = updatedIssues?.filter(
    (issue: IssueInterface) => issue.status === 2
  );
  const testingFilteredArray = updatedIssues?.filter(
    (issue: IssueInterface) => issue.status === 3
  );
  const completedFilteredArray = updatedIssues?.filter(
    (issue: IssueInterface) => issue.status === 4
  );

  return (
    <>
      <div id="issue_container">
        <div className="issue_wrapper">
          <div id="todo">
            <span className="text">{t('project_board.todo')}</span>
            {todoFilteredArray?.map((issue) => (
              <IssueCard issue={issue} key={issue.id} />
            ))}
          </div>
          <div id="development">
            <span className="text">{t('project_board.developement')}</span>
            {developmentFilteredArray?.map((issue) => (
              <IssueCard issue={issue} key={issue.id} />
            ))}
          </div>
          <div id="testing">
            <span className="text">{t('project_board.testing')}</span>
            {testingFilteredArray?.map((issue) => (
              <IssueCard issue={issue} key={issue.id} />
            ))}
          </div>
          <div id="completed">
            <span className="text">{t('project_board.completed')}</span>
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
