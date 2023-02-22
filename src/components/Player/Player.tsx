import style from "../../styles/player.module.scss"
import { RiArrowDropLeftLine, RiArrowDropRightLine, RiPlayCircleFill, RiAddFill, RiHeartFill } from "react-icons/ri"

const Player = (): JSX.Element => {
    return (
        <div className={style.player}>
            <div className="text">
                <div className={style.name}>
                    Name
                </div>
                <div className={style.artist}>
                    Artist
                </div>
            </div>

            <div className={style.controls}>
                <div className={style.prew}><RiArrowDropLeftLine /></div>
                <div className={style.play}><RiPlayCircleFill /></div>
                <div className={style.next}><RiArrowDropRightLine /></div>
            </div>

            <div className={style.tools}>
                <div className={style.add}>
                    <RiAddFill />
                </div>
                <div className={style.like}>
                    <RiHeartFill />
                </div>
            </div>


            <div className={style.progress}>
                <div className={style.line}></div>
            </div>
        </div>
    )
}

export default Player