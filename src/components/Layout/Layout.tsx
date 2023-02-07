import Sidebar from "../Sidebar/Sidebar"

const Layout = ({ children }: any): JSX.Element => {
    return (
        <>
            <Sidebar />
            <div>{children}</div>
        </>

    )
}

export default Layout