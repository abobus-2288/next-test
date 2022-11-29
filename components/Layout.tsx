import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: {children: React.ReactNode}) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout;