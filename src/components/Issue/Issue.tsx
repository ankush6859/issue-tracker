import user from '../../assets/images/user.png';
import IssueCard from '../../assets/UIElements/IssueCard/IssueCard';
import './Issue.scss';

const Issue = () => {
  return (
    <div id="issue_container">
      <div className="issue_wrapper">
        <div id="todo">
          <span className="text">TO DO</span>
          <IssueCard user={user} />
          <IssueCard user={user} />
          <IssueCard user={user} />
        </div>
        <div id="development">
          <span className="text">DEVELOPMENT</span>
          <IssueCard user={user} />
          <IssueCard user={user} />
        </div>
        <div id="testing">
          <span className="text">TESTING</span>
          <IssueCard user={user} />
        </div>
        <div id="completed">
          <span className="text">COMPLETED</span>
          <IssueCard user={user} />
          <IssueCard user={user} />
        </div>
      </div>
    </div>
  );
};

export default Issue;
