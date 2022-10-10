import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <div>hello people</div>,
        },
        {
          path: "/topics",
          element: <div>Topcs </div>,
        },
        {
          path: "/stats",
          element: <div> stats</div>,
        },
        {
          path: "/blog",
          element: <div>blog</div>,
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
