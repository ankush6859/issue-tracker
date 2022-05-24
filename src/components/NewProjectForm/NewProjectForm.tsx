import Button from '../../assets/UIElements/Button/Button';
import './NewProjectForm.scss';

const NewProjectForm = () => {
  return (
    <div id="newProjectForm">
      <h4>Project Form</h4>
      <form>
        <div className="form_row">
          <div className="form_control mr-1">
            <label htmlFor="project_name">Project Name</label>
            <input type="text" id="project_name" placeholder="Project Name" />
          </div>
          <div className="form_control">
            <label htmlFor="owner">Owner</label>
            <select name="owner" id="owner">
              <option value="">Ankush</option>
              <option value="">Akhil</option>
            </select>
          </div>
        </div>
        <div className="form_row">
          <div className="form_control mr-1">
            <label htmlFor="project_start_date">Project Start Date</label>
            <input
              type="date"
              id="project_start_date"
              //   placeholder="Project Name"
            />
          </div>
          <div className="form_control">
            <label htmlFor="project_end_date">Project End Date</label>
            <input type="date" id="project_end_date" />
          </div>
        </div>
        <div className="form_row">
          <Button className="reset">RESET</Button>
          <Button className="create">CREATE</Button>
        </div>
      </form>
    </div>
  );
};

export default NewProjectForm;
