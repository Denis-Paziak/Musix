import style from '../../styles/shelf.module.scss'
import Card from '../Card'
import Title from '../Title'

interface Iprops {
    title: string,
    playlist: any[]
}

const Shelf = ({ title, playlist }: Iprops): JSX.Element => {


    return (
        <section className={style.shelf}>
            <Title title={title} />
            <div className={style.row}>
                {playlist.map((playlist) => {
                    return <Card key={playlist.id} {...playlist} />
                })}
            </div>
        </section>
    )
}

export default Shelf