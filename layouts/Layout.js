import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </>
    )

}

export default Layout