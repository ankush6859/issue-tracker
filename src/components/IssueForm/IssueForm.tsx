import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  useGetAllProjectsQuery,
  useGetAllUsersQuery,
  useAddIssueMutation,
} from '../../services/API/issueApi';
import Button from '../../assets/UIElements/Button/Button';
import LoadingSpinner from '../../assets/UIElements/LoadingSpinner/LoadingSpinner';

import './IssueForm.scss';
import { useNavigate } from 'react-router-dom';

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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const formHandler = async (data: any) => {
    await addIssue(data);
    navigate('/');
  };
  return (
    <>
      {isLoadingProject && <LoadingSpinner asOverlay={true} />}
      <div id="issueForm">
        <h4>{t('issue_form.title')}</h4>
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
                  <label htmlFor="summary">{t('issue_form.summary')}</label>
                  <Field
                    type="text"
                    name="summary"
                    placeholder={t('issue_form.summary_placeholder')}
                  />
                  <div className="error">
                    {errors.summary && touched.summary && errors.summary}
                  </div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="type">{t('issue_form.type')}</label>
                  <Field as="select" name="type" id="type">
                    <option value="1">Bug</option>
                    <option value="2">Task</option>
                    <option value="3">Story</option>
                  </Field>
                  <div className="error"></div>
                </div>
                <div className="form_control">
                  <label htmlFor="projectID">{t('issue_form.project')}</label>
                  <Field as="select" name="projectID" id="projectID">
                    <option
                      value=""
                      label={t('issue_form.select_project')}
                      disabled
                    />
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
                  <label htmlFor="description">
                    {t('issue_form.description')}
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    id="description"
                    cols={30}
                    rows={5}
                    placeholder={t('issue_form.description_placeholder')}
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
                  <label htmlFor="priority">{t('issue_form.priority')}</label>
                  <Field as="select" name="priority" id="priority">
                    <option value="1">{t('low')}</option>
                    <option value="2">{t('medium')}</option>
                    <option value="3">{t('high')}</option>
                  </Field>
                  <div className="error"></div>
                </div>
                <div className="form_control">
                  <label htmlFor="assignee">{t('issue_form.assignee')}</label>
                  <Field as="select" name="assignee" id="assignee">
                    <option value="" disabled>
                      {t('issue_form.select_assignee')}
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
                  <label htmlFor="tags">{t('issue_form.tags')}</label>
                  <Field type="text" name="tags" id="tags" />
                  <div className="error">
                    {errors.tags && touched.tags && errors.tags}
                  </div>
                </div>
                <div className="form_control">
                  <label htmlFor="sprint">{t('issue_form.sprint')}</label>
                  <Field as="select" name="sprint" id="sprint">
                    <option value="Sprint 1">{t('sprint_1')}</option>
                    <option value="Sprint 2">{t('sprint_2')}</option>
                  </Field>
                  <div className="error"></div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="storyPoint">
                    {t('issue_form.storyPoint')}
                  </label>
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
                  <label htmlFor="status">{t('issue_form.status')}</label>
                  <Field
                    as="select"
                    name="status"
                    type="text"
                    style={{ textTransform: 'capitalize' }}
                  >
                    <option value="1">{t('project_board.todo')}</option>
                    <option value="2">{t('project_board.developement')}</option>
                    <option value="3">{t('project_board.testing')}</option>
                    <option value="4">{t('project_board.completed')}</option>
                  </Field>
                  <div className="error"></div>
                </div>
              </div>
              <div className="form_row">
                <Button className="reset" type={'reset'}>
                  {t('reset_button')}
                </Button>
                <Button className="create" type={'submit'} disabled={!isValid}>
                  {t('create_button')}
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
