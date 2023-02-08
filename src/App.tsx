import Layout from "./components/Layout/Layout";
import Main from "./pages/Main";
import "./styles/style.scss";

import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom";



function App(): JSX.Element {

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
