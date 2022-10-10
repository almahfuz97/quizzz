import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Topics from "./components/Topics/Topics";
import Stats from "./components/Stats/Stats";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { topicsLoader } from "./loaders/topicsLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Topics />,
          loader: topicsLoader,
        },
        {
          path: "/topics",
          element: <Topics />,
          loader: topicsLoader,
        },
        {
          path: "/stats",
          element: <Stats />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
