import Issue from '../Issue/Issue';
import './ProjectForm.scss';

const ProjectForm = () => {
  return (
    <>
      <div id="projectForm">
        <h4>Project Details</h4>
        <div className="queryForm">
          <div className="form_row">
            <div
              className="form_control"
              style={{ width: '50%', marginRight: '1rem' }}
            >
              <label htmlFor="project_name">Project Name</label>
              <select name="project_name" id="project_name">
                <option value="">Carque</option>
                <option value="">Movie App</option>
                <option value="">TODO App</option>
              </select>
            </div>
            <div className="form_control" style={{ width: '50%' }}>
              <label htmlFor="project_owner">Project Owner</label>
              <input
                name="project_owner"
                id="project_owner"
                value={'Ankush Sharma'}
                readOnly
              />
            </div>
          </div>
          <div className="form_row dates" style={{ color: '#85929c' }}>
            <span>Start Date: 31-01-2022 &nbsp; |</span>
            <span> &nbsp; End Date: 31-01-2022</span>
          </div>
          <div className="form_row filter">
            <div className="form_control">
              <select name="assignee" id="assignee">
                <option value="">Select</option>
                <option value="">Carque</option>
                <option value="">Movie App</option>
                <option value="">TODO App</option>
              </select>
              <label htmlFor="assignee">Filter Assignee</label>
            </div>
            <div className="form_control">
              <select name="priority" id="priority">
                <option value="">Select</option>
                <option value="">Carque</option>
                <option value="">Movie App</option>
                <option value="">TODO App</option>
              </select>
              <label htmlFor="priority">Filter Priority</label>
            </div>
          </div>
        </div>
      </div>
      <Issue />
    </>
  );
};

export default ProjectForm;
