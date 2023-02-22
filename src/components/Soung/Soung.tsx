import style from "../../styles/soung.module.scss";
import { RiPlayFill, RiAddFill, RiHeartFill } from "react-icons/ri";

interface Isoung {
    id: string,
    name: string,
    audio: string,
    artist_id: string
}

const Soung = ({ data }: any): JSX.Element => {
    let soung: Isoung = data;

    return (
        <div className={style.soung}>
            <div className={style.play}><RiPlayFill /></div>
            <div className={style.text}>
                <div className={style.name}>
                    {soung.name}
                </div>
                <div className={style.artist}>
                    {soung.artist_id}
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