import style from "../../styles/sidebar.module.scss";
import Nav from "./Nav";

import { RiMenu2Fill } from "react-icons/ri";


const Sidebar = (): JSX.Element => {
    return (
        <div className={style.sidebar}>
            <button className={style.menu}><RiMenu2Fill /></button>
            <Nav />
        </div>
    )
}

export default Sidebar