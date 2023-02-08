import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PlaylistPage from "./pages/Playlist";
import Main from './pages/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "playlist/:playlistId",
        element: <PlaylistPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
