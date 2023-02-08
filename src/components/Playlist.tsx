import { Link } from "react-router-dom"
import style from "../styles/playlist.module.scss"

interface Iprops {
    id: number,
    name: string,
    image: string,
    rating: number
}


const Playlist = ({ id, name, image }: Iprops): JSX.Element => {
    return (
        <Link to={`playlist/${id}`} className={style.playlist}>
            <div className={style.img}>
                <img src={image} alt="none" />
            </div>
            <div className={style.title}>
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default Playlist