import { Link } from "react-router-dom"
import style from "../styles/card.module.scss"

interface Iprops {
    id: number,
    name: string,
    image: string,
    rating: number
}


const Card = ({ id, name, image }: Iprops): JSX.Element => {
    return (
        <Link to={`playlist/${id}`} className={style.card}>
            <div className={style.img}>
                <img src={image} alt="none" />
            </div>
            <div className={style.title}>
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default Card