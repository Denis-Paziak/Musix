import style from "../../styles/player.module.scss"
import { RiArrowDropLeftLine, RiArrowDropRightLine, RiPlayCircleFill, RiPauseCircleFill, RiAddFill, RiHeartFill } from "react-icons/ri"
import { useEffect, useRef, useState } from "react"

const Player = ({ soungs }: any): JSX.Element => {
    const [isPlaying, setPlayingStatus] = useState(false);

    const [soung, setSoung] = useState(new Audio());
    const [soungNumber, setSoungNumber] = useState(0);

    const progressBar = useRef(document.createElement("div"));


    useEffect(() => {
        changeSoung(0);
    }, [soungs]);

    useEffect(() => {
        play();
    }, [soung]);

    const changeSoung = (num: number) => {
        pause();

        if (soungs.length > 0) {
            let newAudio = new Audio(soungs[num].audio);
            setSoung(newAudio);
        }

        setSoungNumber(num);
    }

    const soungProgress = () => {
        const progressInterval = setInterval(() => {
            let progressProcent = (soung.currentTime / soung.duration) * 100;
            progressBar.current.style.width = progressProcent + "%";

            if (soung.currentTime == soung.duration) {
                next();
            }

            if (soung.paused) {
                clearInterval(progressInterval);
            }
        }, 100);
    }

    const handler = () => {
        if (!isPlaying) {
            play();
        } else {
            pause();
        }
    }

    const play = () => {
        soung.play();
        setPlayingStatus(true);
        soungProgress();
    }

    const pause = () => {
        soung.pause();
        setPlayingStatus(false);
    }

    const next = () => {
        let num = soungNumber + 1;
        if (num >= soungs.length) {
            num = 0;
        }
        changeSoung(num);
    }

    const prew = () => {
        let num = soungNumber - 1;
        if (num < 0) {
            num = soungs.length - 1;
        }
        changeSoung(num);
    }

    return (
        <div className={style.player}>
            <div className={style.row}>
                <div className={style.controls}>
                    <div className={style.prew} onClick={prew}><RiArrowDropLeftLine /></div>

                    {!isPlaying && <div className={style.play} onClick={handler}><RiPlayCircleFill /></div>}
                    {isPlaying && <div className={style.play} onClick={handler}><RiPauseCircleFill /></div>}

                    <div className={style.next} onClick={next}><RiArrowDropRightLine /></div>
                </div>

                <div className={style.text}>
                    <div className={style.name}>
                        {soungs[soungNumber].name}
                    </div>
                    <div className={style.artist}>
                        {soungs[soungNumber].artist}
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

            <div className={style.progress}>
                <div className={style.line} ref={progressBar}></div>
            </div>
        </div>
    )
}

export default Player