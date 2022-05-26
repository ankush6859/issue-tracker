import React, { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import logo from '../../assets/images/logo.png';
import main from '../../assets/images/main.png';
import Button from '../../assets/UIElements/Button/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import { UPDATE_FORM, onInputChange, onFocusOut } from '../../utils/formUtils';
import Error from '../../assets/UIElements/Error/Error';
import { useLoginMutation } from '../../services/API/authApi';
import { useAppDispatch } from '../../services/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { setCredentials } from '../../services/reduxSlice/authSlice';
import { useState } from 'react';
import LoadingSpinner from '../../assets/UIElements/LoadingSpinner/LoadingSpinner';
export const initialState = {
  email: { value: '', touched: false, hasError: true, error: '' },
  password: { value: '', touched: false, hasError: true, error: '' },
  isFormValid: false,
};

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const formReducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
      case UPDATE_FORM:
        const { name, value, hasError, error, touched, isFormValid } =
          action.data;
        return {
          ...state,
          [name]: {
            ...state[name as keyof Object],
            value,
            hasError,
            error,
            touched,
          },
          isFormValid,
        };
      default:
        return state;
    }
  };
  const [error, setError] = useState('');
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch1 = useAppDispatch();
  const [currLang, setCurrLang] = useState('en');

  const formSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const user = {
      email: formState.email.value,
      password: formState.password.value,
    };

    const response: any = await login(user);
    if (response.error) {
      setError(response.error.data.error);
      return;
    }
    dispatch1(setCredentials(response.data));
    navigate('/');
  };
  const languageHandler = () => {
    currLang === 'en' ? i18n.changeLanguage('hi') : i18n.changeLanguage('en');
    currLang === 'en' ? setCurrLang('hi') : setCurrLang('en');
  };

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay={true} />}
      <div id="login">
        <div className="left">
          <div className="logo">
            <img className="logo_icon" src={logo} alt="issue_tracker" />
            <img className="main_logo" src={main} alt="issue_tracker" />
          </div>
          <div className="language_changer">
            <TranslateIcon />
            <span onClick={languageHandler}>
              Change to
              {currLang === 'en' ? ' Hindi' : ' English'}
            </span>
          </div>
        </div>
        <div className="right">
          <form id="login_form" onSubmit={formSubmitHandler}>
            <div className="text">
              <h4>{t('login.title')}</h4>
            </div>
            <div className="form_control">
              <label htmlFor="email">{t('login.email')}</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t('login.email_placeholder')}
                value={formState.email.value}
                onChange={(e) => {
                  onInputChange('email', e.target.value, dispatch, formState);
                }}
                onBlur={(e) => {
                  onFocusOut('email', e.target.value, dispatch, formState);
                }}
              />
              <Error>
                {formState.email.touched &&
                  formState.email.hasError &&
                  formState.email.error}
              </Error>
            </div>
            <div className="form_control">
              <label htmlFor="password">{t('login.password')}</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                value={formState.password.value}
                onChange={(e) => {
                  onInputChange(
                    'password',
                    e.target.value,
                    dispatch,
                    formState
                  );
                }}
                onBlur={(e) => {
                  onFocusOut('password', e.target.value, dispatch, formState);
                }}
              />
              <Error>
                {formState.password.touched &&
                  formState.password.hasError &&
                  formState.password.error}
              </Error>
            </div>
            <div className="form_button">
              <Error>{error && error}</Error>
              <Button
                className="login_button"
                disabled={!formState.isFormValid}
                type={'submit'}
              >
                {t('login.title')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

export const Board1 = () => {
  return <h1>Project Board 1</h1>;
};
export const Board2 = () => {
  return <h1>Project Board 2</h1>;
};
export const Board3 = () => {
  return <h1>Project Board 3</h1>;
};
