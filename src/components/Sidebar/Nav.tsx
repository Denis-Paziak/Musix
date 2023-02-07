import style from "../../styles/nav.module.scss";
import { RiHomeLine, RiSearch2Line, RiPlayList2Fill } from "react-icons/ri";

const Nav = (): JSX.Element => {
    return (
        <div className={style.nav}>
            <a href="/" className={style.item}><RiHomeLine /></a>
            <a href="/" className={style.item}><RiSearch2Line /></a>
            <a href="/" className={style.item}><RiPlayList2Fill /></a>
        </div>
    )
}

export default Nav