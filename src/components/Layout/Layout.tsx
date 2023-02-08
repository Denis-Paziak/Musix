import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({ children }: any): JSX.Element => {
    return (
        <>
            <Sidebar />
            <Header />
            <div>{children}</div>
        </>

    )
}

export default Layout