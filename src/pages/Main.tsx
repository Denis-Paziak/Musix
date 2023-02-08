import { useEffect, useState } from "react"
import Shelf from "../components/Shelf/Shelf"

import playlist from "../database/playlist.js"


const Main = (): JSX.Element => {
    const [RecommendedPlaylist, setRecommendedPlaylist] = useState([]);

    useEffect(() => {
        let newArr: any = [];

        for (let i = 0; i < 4; i++) {
            newArr.push(playlist[i]);
        }

        setRecommendedPlaylist(newArr);
    }, []);

    return (
        <>
            <Shelf title={"Recommended Playlists"} playlist={RecommendedPlaylist} />
            <Shelf title={"Recommended Playlists"} playlist={RecommendedPlaylist} />
            <Shelf title={"Recommended Playlists"} playlist={RecommendedPlaylist} />
        </>
    )
}

export default Main