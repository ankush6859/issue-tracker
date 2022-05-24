import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './services/store/store';
import './index.scss';
import Login from './components/Login/Login';
import IssueForm from './components/IssueForm/IssueForm';
import ProjectForm from './components/ProjectForm/ProjectForm';
import App from './App';
import NewProjectForm from './components/NewProjectForm/NewProjectForm';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ProjectForm />} />
            <Route path="/create-issue" element={<IssueForm />} />
            <Route path="/create-project" element={<NewProjectForm />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
