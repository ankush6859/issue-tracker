import './IssueCard.scss';

const IssueCard = (props: any) => {
  const priorityClasses = ['high', 'medium', 'low'];
  return (
    <div className="card">
      <div className="card_header">
        <span>ID: HU220001</span>
        <span>31-01-2022</span>
      </div>
      <div className="card_body">
        <h6>Lorem Ipsum</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          rerum molestiae nobis optio
        </p>
      </div>
      <div className="card_footer">
        <div className="user_detail">
          <img src={props.user} alt="user_profile" />
          <span>Ankush Sharma</span>
        </div>
        <div className="priority">
          <span style={{ color: '#85929C' }}>Priority</span>
          <span className={priorityClasses[0]}>High</span>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
