import Layout from "./components/Layout/Layout";
import "./styles/style.scss";
import Player from "./components/Player/Player"

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


import Service from "./services/service";
const service = new Service();

function App(): JSX.Element {
  const [soungs, setSoungs]: any[] = useState([]);
  const [playSoungId, setPlaySoungId]: any = useState(0);

  useEffect(() => {
    const getSoungs = async () => {
      const data = await service.getPlaylistSoungs("5");
      setSoungs(data);
    }
    getSoungs();

  }, []);

  useEffect(() => {
    console.log(playSoungId);
  }, [playSoungId]);

  return (
    <Layout>
      <Outlet />
      {soungs.length > 0 && <Player soungs={soungs} setPlaySoungId={setPlaySoungId} />}
    </Layout>
  )
}

export default App
