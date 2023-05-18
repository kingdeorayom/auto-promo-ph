import { useRubik } from '../utils/fonts';

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main className={`${useRubik.className}`}>
                {children}
            </main>
            <Footer />
        </>
    )

}

export default Layout