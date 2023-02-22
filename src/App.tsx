import Layout from "./components/Layout/Layout";
import "./styles/style.scss";

import { Outlet } from "react-router-dom";

function App(): JSX.Element {

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
