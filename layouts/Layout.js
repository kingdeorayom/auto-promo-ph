
import Header from '@/components/Layout/Header'
import styles from '@/styles/Layout.module.css'
import Footer from '@/components/Layout/Footer'

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