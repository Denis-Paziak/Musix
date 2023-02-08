import style from "../../styles/auth.module.scss";

const Auth = () => {
    return (
        <div className={style.auth}>
            <a href="/">
                <button className={style.register}>sing up</button>
            </a>
            <a href="/">
                <button className={style.login}>log in</button>
            </a>
        </div>
    )
}

export default Auth