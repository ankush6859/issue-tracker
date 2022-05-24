import React, { useReducer } from 'react';
import logo from '../../assets/images/logo.png';
import main from '../../assets/images/main.png';
import Button from '../../assets/UIElements/Button/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import { UPDATE_FORM, onInputChange, onFocusOut } from '../../utils/formUtils';
import './Login.scss';
import Error from '../../assets/UIElements/Error/Error';

export const initialState = {
  email: { value: '', touched: false, hasError: true, error: '' },
  password: { value: '', touched: false, hasError: true, error: '' },
  isFormValid: false,
};

const Login = () => {
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
  const [formState, dispatch] = useReducer(formReducer, initialState);

  return (
    <div id="login">
      <div className="left">
        <div className="logo">
          <img className="logo_icon" src={logo} alt="issue_tracker" />
          <img className="main_logo" src={main} alt="issue_tracker" />
        </div>
        <div className="language_changer">
          <TranslateIcon />
          <span>Languages</span>
        </div>
      </div>
      <div className="right">
        <form id="login_form">
          <div className="text">
            <h4>Login</h4>
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              value={formState.password.value}
              onChange={(e) => {
                onInputChange('password', e.target.value, dispatch, formState);
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
            <Button className="login_button" disabled={!formState.isFormValid}>
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </div>
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
