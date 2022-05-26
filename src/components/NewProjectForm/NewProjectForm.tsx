import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Button from '../../assets/UIElements/Button/Button';
import LoadingSpinner from '../../assets/UIElements/LoadingSpinner/LoadingSpinner';
import { useAddProjectMutation } from '../../services/API/issueApi';
import { useAppSelector } from '../../services/hooks/hooks';
import { RootState } from '../../services/store/store';

import './NewProjectForm.scss';

const ProjectFormSchema = Yup.object().shape({
  projectName: Yup.string()
    .min(5, 'Project name should have at least 5 characters')
    .max(20, 'Project should be less than 20 characters')
    .required('Project Name is required'),
  projectStartDate: Yup.string().required('Project is required'),
  projectEndDate: Yup.string().required('Assignee is required'),
});

const NewProjectForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [addProject, { isLoading }] = useAddProjectMutation();

  const formHandler = async (data: any) => {
    const response = await addProject(data);
    console.log(response);
    navigate('/');
  };
  return (
    <>
      {isLoading && <LoadingSpinner asOverlay={true} />}
      <div id="newProjectForm">
        <h4>Project Form</h4>
        <Formik
          initialValues={{
            projectName: '',
            projectOwner: user?.userId,
            projectStartDate: '',
            projectEndDate: '',
          }}
          validationSchema={ProjectFormSchema}
          onSubmit={(values) => {
            formHandler(values);
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="projectName">{t('project_form.name')}</label>
                  <Field
                    type="text"
                    id="projectName"
                    name="projectName"
                    placeholder={t('project_form.name_placeholder')}
                  />
                  <div className="error">
                    {errors.projectName &&
                      touched.projectName &&
                      errors.projectName}
                  </div>
                </div>
                <div className="form_control">
                  <label htmlFor="projectOwner">
                    {t('project_form.owner')}
                  </label>
                  <Field
                    type="text"
                    name="projectOwner"
                    readOnly
                    value={user?.name}
                  />
                  <div className="error"></div>
                </div>
              </div>
              <div className="form_row">
                <div className="form_control mr-1">
                  <label htmlFor="projectStartDate">
                    {t('project_form.start_date')}
                  </label>
                  <Field
                    type="date"
                    id="projectStartDate"
                    name="projectStartDate"
                  />
                  <div className="error">
                    {errors.projectStartDate &&
                      touched.projectStartDate &&
                      errors.projectStartDate}
                  </div>
                </div>
                <div className="form_control">
                  <label htmlFor="projectEndDate">
                    {t('project_form.end_date')}
                  </label>
                  <Field
                    type="date"
                    name="projectEndDate"
                    id="projectEndDate"
                  />
                  <div className="error">
                    {errors.projectEndDate &&
                      touched.projectEndDate &&
                      errors.projectEndDate}
                  </div>
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

export default NewProjectForm;
