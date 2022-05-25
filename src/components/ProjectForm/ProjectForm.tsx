import { useState } from 'react';
import LoadingSpinner from '../../assets/UIElements/LoadingSpinner/LoadingSpinner';
import {
  useGetAllIssuesForProjectQuery,
  useGetAllProjectsQuery,
} from '../../services/API/issueApi';
import Issue from '../Issue/Issue';
import './ProjectForm.scss';

const ProjectForm = () => {
  const [projectId, setProjectId] = useState<string>('P86100170');
  const [priority, setPriority] = useState<number>(-1);
  const [assigneeId, setAssigneeId] = useState<number>(-1);

  //Fetching data using hooks provided by RTK query
  const {
    data: issueData,
    error: issueError,
    isLoading: isLoadingIssue,
  } = useGetAllIssuesForProjectQuery(projectId);
  const {
    data: projectData,
    error: projectError,
    isLoading: isLoadingProject,
  } = useGetAllProjectsQuery();

  //Getting list of available assignee
  const assigneeList = issueData?.map((issue) => issue.assignee);

  // Change Handlers for filters
  const projectChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setProjectId(e.currentTarget.value);
  };
  const priorityChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setPriority(+e.currentTarget.value);
  };
  const assigneeChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setAssigneeId(+e.currentTarget.value);
  };
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
              <select
                name="project_name"
                id="project_name"
                onChange={projectChangeHandler}
              >
                {projectData?.map((project) => (
                  <option value={project.projectID} key={project.projectID}>
                    {project.projectName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form_control" style={{ width: '50%' }}>
              <label htmlFor="project_owner">Project Owner</label>
              <input name="project_owner" id="project_owner" readOnly />
            </div>
          </div>
          <div className="form_row dates" style={{ color: '#85929c' }}>
            <span>Start Date: 31-01-2022 &nbsp; |</span>
            <span> &nbsp; End Date: 31-01-2022</span>
          </div>
          <div className="form_row filter">
            <div className="form_control">
              <select
                name="assignee"
                id="assignee"
                onChange={assigneeChangeHandler}
              >
                {assigneeList?.map((assignee) => (
                  <option value={assignee.id} key={assignee.id}>
                    {assignee.name}
                  </option>
                ))}
              </select>
              <label htmlFor="assignee">Filter Assignee</label>
            </div>
            <div className="form_control">
              <select
                name="priority"
                id="priority"
                onChange={priorityChangeHandler}
              >
                <option value="-1">Select</option>
                <option value="1">LOW</option>
                <option value="2">MEDIUM</option>
                <option value="3">HIGH</option>
              </select>
              <label htmlFor="priority">Filter Priority</label>
            </div>
          </div>
        </div>
      </div>
      {isLoadingIssue && <LoadingSpinner asOverlay={true} />}
      <Issue issues={issueData} priority={priority} assigneeId={assigneeId} />
    </>
  );
};

export default ProjectForm;
