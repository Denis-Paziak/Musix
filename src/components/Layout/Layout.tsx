import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Player from "../Player/Player"

const Layout = ({ children }: any): JSX.Element => {
    return (
        <>
            <Sidebar />
            <Header />
            <div>{children}</div>
            <Player />
        </>

    )
}

export default Layout