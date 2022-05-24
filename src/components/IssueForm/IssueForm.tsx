import Button from '../../assets/UIElements/Button/Button';
import './IssueForm.scss';

const IssueForm = () => {
  return (
    <div id="issueForm">
      <h4>Create User Stories/Tasks/Bugs</h4>
      <form>
        <div className="form_row">
          <div className="form_control">
            <label htmlFor="summary">Summary</label>
            <input type="text" placeholder="Add Sumaary" />
          </div>
        </div>
        <div className="form_row">
          <div className="form_control mr-1">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="">type 1</option>
              <option value="">type 2</option>
              <option value="">type 3</option>
            </select>
          </div>
          <div className="form_control">
            <label htmlFor="project_name">Project</label>
            <select name="project_name" id="project_name">
              <option value="">Carque</option>
              <option value="">Food App</option>
            </select>
          </div>
        </div>
        <div className="form_row">
          <div className="form_control">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={5}
              placeholder="Write Description"
            ></textarea>
          </div>
        </div>
        <div className="form_row">
          <div className="form_control mr-1">
            <label htmlFor="priority">Priority</label>
            <select name="priority" id="priority">
              <option value="">Priority 1</option>
              <option value="">Priority 2</option>
              <option value="">Priority 3</option>
            </select>
          </div>
          <div className="form_control">
            <label htmlFor="assignee">Assignee</label>
            <select name="assignee" id="assignee">
              <option value="">ANKUSH SHARMA</option>
              <option value="">Sumit SHarma</option>
            </select>
          </div>
        </div>
        <div className="form_row">
          <div className="form_control mr-1">
            <label htmlFor="tags">Tags</label>
            <select name="tags" id="tags">
              <option value="">tags 1</option>
              <option value="">tags 2</option>
              <option value="">tags 3</option>
            </select>
          </div>
          <div className="form_control">
            <label htmlFor="sprint">Sprint</label>
            <select name="sprint" id="sprint">
              <option value="">Sprint 1</option>
              <option value="">Sprint 2</option>
            </select>
          </div>
        </div>
        <div className="form_row">
          <div className="form_control">
            <label htmlFor="story">Story Points</label>
            <input type="text" placeholder="0, 1, 2......" />
          </div>
        </div>
      </form>
      <div className="form_row">
        <Button className="reset">RESET</Button>
        <Button className="create">CREATE</Button>
      </div>
    </div>
  );
};

export default IssueForm;
