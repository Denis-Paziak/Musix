import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import style from "../styles/playlist.module.scss";

import Service from "../services/service";
import Soung from "../components/Soung/Soung";
const service = new Service();



const PlaylistPage = (): JSX.Element => {
    const { playlistId } = useParams();
    const [playlist, setPlsylist] = useState<any>({});
    const [soungs, setSoungs]: any[] = useState([]);

    useEffect(() => {
        const getPlaylist = async () => {
            const data = await service.getPlaylist(playlistId);
            setPlsylist({ ...data });
        }

        const getSoungs = async () => {
            const data = await service.getPlaylistSoungs(playlistId);
            setSoungs(data);
        }

        getPlaylist();
        getSoungs();

    }, []);


    return (
        <div className={style.playlist}>
            <img className={style.img} src={playlist.image} alt="none" />
            <div className="container">
                <div className={style.title}>
                    <h2>{playlist.name}</h2>
                </div>
                {soungs.map((soung: any) => {
                    return <Soung key={soung.id} data={soung} />
                })}
            </div>
        </div>
    )
}

export default PlaylistPage