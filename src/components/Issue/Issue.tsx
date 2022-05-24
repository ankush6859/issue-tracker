import IssueCard from '../../assets/UIElements/IssueCard/IssueCard';
import LoadingSpinner from '../../assets/UIElements/LoadingSpinner/LoadingSpinner';
import { IssueInterface } from '../../interfaces/IssueInterface';
import { useGetAllIssuesQuery } from '../../services/API/issueApi';

import './Issue.scss';

const Issue = () => {
  const { data, error, isLoading } = useGetAllIssuesQuery();

  const todoFilteredArray = data?.filter(
    (issue: IssueInterface) => issue.type === 1
  );
  const developmentFilteredArray = data?.filter(
    (issue: IssueInterface) => issue.type === 2
  );
  const testingFilteredArray = data?.filter(
    (issue: IssueInterface) => issue.type === 3
  );
  const completedFilteredArray = data?.filter(
    (issue: IssueInterface) => issue.type === 4
  );

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay={true} />}
      <div id="issue_container">
        <div className="issue_wrapper">
          <div id="todo">
            <span className="text">TO DO</span>
            {!isLoading &&
              todoFilteredArray
                ?.splice(0, 10)
                .map((issue) => <IssueCard issue={issue} key={issue.id} />)}
          </div>
          <div id="development">
            <span className="text">DEVELOPMENT</span>
            {!isLoading &&
              developmentFilteredArray
                ?.splice(0, 10)
                .map((issue) => <IssueCard issue={issue} key={issue.id} />)}
          </div>
          <div id="testing">
            <span className="text">TESTING</span>
            {!isLoading &&
              testingFilteredArray
                ?.splice(0, 10)
                .map((issue) => <IssueCard issue={issue} key={issue.id} />)}
          </div>
          <div id="completed">
            <span className="text">COMPLETED</span>
            {!isLoading &&
              completedFilteredArray
                ?.splice(0, 10)
                .map((issue) => <IssueCard issue={issue} key={issue.id} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Issue;
