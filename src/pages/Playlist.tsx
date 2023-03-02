import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { RiPlayFill, RiPauseFill } from "react-icons/ri";
import style from "../styles/playlist.module.scss";

import Service from "../services/service";
import Soung from "../components/Soung/Soung";
const service = new Service();



const PlaylistPage = (): JSX.Element => {
    const { playlistId } = useParams();
    const [playlist, setPlsylist] = useState<any>({});
    const [soungs, setSoungs]: any[] = useState([]);
    const [setPlayPlaylistId, playPlaylistId]: any = useOutletContext();
    const [isPlay, setPlayStatus] = useState(false);

    useEffect(() => {
        if (playPlaylistId == playlistId) {
            setPlayStatus(true);
        }

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


    const playPlaylistHandler = () => {
        setPlayPlaylistId(playlistId);
        setPlayStatus(true);
    }


    return (
        <div className={style.playlist}>
            <img className={style.img} src={playlist.image} alt="none" />

            <div className="container">
                <div className={style.playlistData}>
                    <div className={style.row}>
                        <img className={style.playlistDataImg} src={playlist.image} alt="none" />
                        <div className={style.title}>
                            <h2>{playlist.name}</h2>
                            <p>Count soung</p>
                            <div className={style.playPlaylist}
                                onClick={playPlaylistHandler}>
                                {!isPlay && <RiPlayFill />}
                                {isPlay && <RiPauseFill />}
                            </div>
                        </div>
                    </div>
                </div>
                {soungs.map((soung: any) => {
                    return <Soung key={soung.id} data={soung} />
                })}
            </div>
        </div>
    )
}

export default PlaylistPage