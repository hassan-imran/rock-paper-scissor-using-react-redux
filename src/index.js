import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TopNav from './components/TopNav';
import NotFound from './components/NotFound';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TopNav />
        <App />
      </>
    ),
    errorElement: (<NotFound />)
  }, {
    path: "/about",
    element: (
      <>
        <TopNav />
        <About />
      </>
    ),
    errorElement: (<NotFound />)
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
