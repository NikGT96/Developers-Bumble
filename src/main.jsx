import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login.jsx";
import { RouterProvider } from "react-router";
import Feed from "./Components/Feed.jsx";
import store from "./Utils/store.jsx";
import { Provider } from "react-redux";
import Profile from "./Components/Profile.jsx";
import Connections from "./Components/Connections.jsx";
import Requests from "./Components/Requests.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/connections",
        element: <Connections />,
      },
      {
        path: "/Requests",
        element: <Requests />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
