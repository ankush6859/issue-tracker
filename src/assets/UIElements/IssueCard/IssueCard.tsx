import user from '../../images/user.png';
import { IssueCardProps } from '../../../interfaces/IssueInterface';

import './IssueCard.scss';

const IssueCard: React.FC<IssueCardProps> = ({ issue }: IssueCardProps) => {
  const { id, createdOn, summary, description, createdBy, priority } = issue;
  const priorityArr = ['low', 'medium', 'high'];
  return (
    <div className="card">
      <div className="card_header">
        <span>{id}</span>
        <span>{createdOn.slice(0, 10)}</span>
      </div>
      <div className="card_body">
        <h6>{summary}</h6>
        <p>{description}</p>
      </div>
      <div className="card_footer">
        <div className="user_detail">
          <img src={user} alt="user_profile" />
          <span>{createdBy.name}</span>
        </div>
        <div className="priority">
          <span style={{ color: '#85929C' }}>Priority</span>
          <span className={priorityArr[priority - 1]}>
            {priorityArr[priority - 1].toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
