import style from "../../styles/soung.module.scss";
import { RiPlayFill, RiAddFill, RiHeartFill, RiPauseCircleFill } from "react-icons/ri";
import { useEffect, useState } from "react";

interface Isoung {
    id: string,
    name: string,
    audio: string,
    artist: string
}

const Soung = ({ data }: any): JSX.Element => {
    let soung: Isoung = data;

    return (
        <div className={style.soung}>
            <div className={style.play}>
                <RiPlayFill />
            </div>
            <div className={style.text}>
                <div className={style.name}>
                    {soung.name}
                </div>
                <div className={style.artist}>
                    {soung.artist}
                </div>
            </div>

            <div className={style.tools}>
                <div className={style.add}>
                    <RiAddFill />
                </div>
                <div className={style.like}>
                    <RiHeartFill />
                </div>
            </div>
        </div>
    )
}

export default Soung