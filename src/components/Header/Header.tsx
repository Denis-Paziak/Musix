import style from "../../styles/header.module.scss";
import { Link } from "react-router-dom";
import Auth from "./Auth";


const Header = (): JSX.Element => {
    return (
        <div className={style.header}>
            <Link to="/" >
                <div className={style.logo}>
                    <h2>Musi<span>x</span></h2>
                </div>
            </Link>
            <Auth />
        </div>
    )
}

export default Header