import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </>
    )

}

export default Layout