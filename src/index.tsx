import React from 'react';
import App from './App';
import './i18n';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RootState, store } from './services/store/store';
import Login from './components/Login/Login';
import IssueForm from './components/IssueForm/IssueForm';
import ProjectForm from './components/ProjectForm/ProjectForm';
import NewProjectForm from './components/NewProjectForm/NewProjectForm';
import Error404 from './components/Error404/Error404';
import './index.scss';
import { useAppSelector } from './services/hooks/hooks';
const container = document.getElementById('root')!;
const root = createRoot(container);

//Function validating private routes
const PrivateRoute = (props: any) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  return user ? props.children : <Navigate to="/login" />;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            }
          >
            <Route index element={<ProjectForm />} />
            <Route path="/create-issue" element={<IssueForm />} />
            <Route path="/create-project" element={<NewProjectForm />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
