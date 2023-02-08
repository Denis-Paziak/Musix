import style from "../../styles/header.module.scss";
import Auth from "./Auth";


const Header = (): JSX.Element => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <h2>Musi<span>x</span></h2>
            </div>
            <Auth />
        </div>
    )
}

export default Header