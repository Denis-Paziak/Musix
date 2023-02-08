import style from '../../styles/shelf.module.scss'
import Playlist from '../Playlist'
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
                    return <Playlist key={playlist.id} {...playlist} />
                })}
            </div>
        </section>
    )
}

export default Shelf