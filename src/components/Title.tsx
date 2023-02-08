import style from "../styles/title.module.scss"

interface Iprops {
    title: string
}

const Title = ({ title }: Iprops): JSX.Element => {
    return (
        <div className={style.title}>
            <h2>{title}</h2>
            <a href="" className={style.showAll}>show all</a>
        </div>
    )
}

export default Title