import Layout from "./components/Layout/Layout";
import Main from "./pages/Main";
import "./styles/style.scss";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PlaylistPage from "./pages/PlaylistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/playlist/:playlistId",
    element: <PlaylistPage />,
  },
]);

function App(): JSX.Element {

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
