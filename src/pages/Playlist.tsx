import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/playlist.module.scss";

import Service from "../services/service";
const service = new Service();


const PlaylistPage = (): JSX.Element => {
    const { playlistId } = useParams();
    const [playlist, setPlsylist] = useState<any>({});
    const [soungs, setSoungs] = useState([]);

    useEffect(() => {
        const getPlaylist = async () => {
            const data = await service.getPlaylist(playlistId);
            setPlsylist({ ...data });
        }

        const getSoungs = async () => {
            const data = await service.getPlaylist(playlistId);
            setPlsylist({ ...data });
        }

        getPlaylist();
    }, []);


    return (
        <div className={style.playlist}>
            <img className={style.img} src={playlist.image} alt="none" />
            <div className="container">
                {playlist.name}
            </div>
        </div>
    )
}

export default PlaylistPage