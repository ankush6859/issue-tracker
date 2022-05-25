import Button from '../../assets/UIElements/Button/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  useGetAllProjectsQuery,
  useGetAllUsersQuery,
  useAddIssueMutation,
} from '../../services/API/issueApi';

import './IssueForm.scss';
import LoadingSpinner from '../../assets/UIElements/LoadingSpinner/LoadingSpinner';

const IssueFormSchema = Yup.object().shape({
  summary: Yup.string()
    .min(8, 'Summary should have at least 8 characters')
    .max(20, 'Summary should be less than 20 characters')
    .required('Summary is required'),
  description: Yup.string()
    .min(20, 'Summary should have at least 20 characters')
    .max(60, 'Summary should be less than 60 characters')
    .required('Description is required'),
  projectID: Yup.string().required('Project is required'),
  assignee: Yup.string().required('Assignee is required'),
  tags: Yup.string().required('Tags are required'),
  storyPoint: Yup.string().required('Story points are required'),
});

const IssueForm = () => {
  //prettier-ignore
  const { data: projectData, isLoading: isLoadingProject } = useGetAllProjectsQuery();
  const { data: userData } = useGetAllUsersQuery();
  const [addIssue] = useAddIssueMutation();

  const formHandler = async (data: any) => {
    console.log(data);
    const response = await addIssue(data);
    console.log(response);
  };
  return (
    <>
      {isLoadingProject && <LoadingSpinner asOverlay={true} />}
      <div id="issueForm">
        <h4>Create User Stories/Tasks/Bugs</h4>
        <Formik
          initialValues={{
            summary: '',
            type: '1',
            projectID: '',
            description: '',
            priority: '1',
            assignee: '',
            tags: '',
            sprint: 'Sprint 1',
            storyPoint: '',
            status: '1',
          }}
          validationSchema={IssueFormSchema}
          onSubmit={(values) => {
            let tags = values.tags;
            formHandler({ ...values, tags: [tags] });
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <div className="form_row">
                <div className="form_control">
                  <label htmlFor="summary">Summary</label>
                  <Field type="text" name="summary" placeholder="Add Summary" />
                  <div className="error">
                    {errors.summary && touched.summary && errors.summary}
                  </div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="type">Type</label>
                  <Field as="select" name="type" id="type">
                    <option value="1">Bug</option>
                    <option value="2">Task</option>
                    <option value="3">Story</option>
                  </Field>
                  <div className="error"></div>
                </div>
                <div className="form_control">
                  <label htmlFor="projectID">Project</label>
                  <Field as="select" name="projectID" id="projectID">
                    <option value="" label="Select Project" disabled />
                    {projectData?.map((project) => (
                      <option value={project.projectID} key={project.projectID}>
                        {project.projectName}
                      </option>
                    ))}
                  </Field>
                  <div className="error">
                    {errors.projectID && touched.projectID && errors.projectID}
                  </div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control">
                  <label htmlFor="description">Description</label>
                  <Field
                    as="textarea"
                    name="description"
                    id="description"
                    cols={30}
                    rows={5}
                    placeholder="Write Description"
                  ></Field>
                  <div className="error">
                    {errors.description &&
                      touched.description &&
                      errors.description}
                  </div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="priority">Priority</label>
                  <Field as="select" name="priority" id="priority">
                    <option value="1">LOW</option>
                    <option value="2">MEDIUM</option>
                    <option value="3">HIGH</option>
                  </Field>
                  <div className="error"></div>
                </div>
                <div className="form_control">
                  <label htmlFor="assignee">Assignee</label>
                  <Field as="select" name="assignee" id="assignee">
                    <option value="" disabled>
                      Select assignee
                    </option>
                    {userData?.map((user) => (
                      <option value={user.id}>{user.name}</option>
                    ))}
                  </Field>
                  <div className="error">
                    {errors.assignee && touched.assignee && errors.assignee}
                  </div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="tags">Tags</label>
                  <Field type="text" name="tags" id="tags" />
                  <div className="error">
                    {errors.tags && touched.tags && errors.tags}
                  </div>
                </div>
                <div className="form_control">
                  <label htmlFor="sprint">Sprint</label>
                  <Field as="select" name="sprint" id="sprint">
                    <option value="Sprint 1">Sprint 1</option>
                    <option value="Sprint 2">Sprint 2</option>
                  </Field>
                  <div className="error"></div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="storyPoint">Story Point</label>
                  <Field
                    name="storyPoint"
                    type="text"
                    placeholder="0, 1, 2......"
                  />
                  <div className="error">
                    {errors.storyPoint &&
                      touched.storyPoint &&
                      errors.storyPoint}
                  </div>
                </div>
                <div className="form_control">
                  <label htmlFor="status">Status</label>
                  <Field as="select" name="status" type="text">
                    <option value="1">Todo</option>
                    <option value="2">Development</option>
                    <option value="3">Testing</option>
                    <option value="4">Completed</option>
                  </Field>
                  <div className="error"></div>
                </div>
              </div>
              <div className="form_row">
                <Button className="reset" type={'reset'}>
                  RESET
                </Button>
                <Button className="create" type={'submit'} disabled={!isValid}>
                  CREATE
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default IssueForm;
