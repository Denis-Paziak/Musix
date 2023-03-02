import Layout from "./components/Layout/Layout";
import "./styles/style.scss";
import Player from "./components/Player/Player"

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


import Service from "./services/service";
const service = new Service();

function App(): JSX.Element {
  const [soungs, setSoungs]: any[] = useState([]);
  const [playPlaylistId, setPlayPlaylistId]: any = useState(null);

  useEffect(() => {
    const getSoungs = async () => {
      if (playPlaylistId != null) {
        const data = await service.getPlaylistSoungs(playPlaylistId);
        setSoungs(data);
      }
    }
    getSoungs();

  }, [playPlaylistId]);


  return (
    <Layout>
      <Outlet context={[setPlayPlaylistId, playPlaylistId]} />
      {soungs.length > 0 && <Player soungs={soungs} />}
    </Layout>
  )
}

export default App
