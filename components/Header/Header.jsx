import styles from "../../styles/Header.module.css"


import Link from 'next/link';


const Header = ({ headerText, showArrow, handleArrow }) => {
    return (
        <>
            <div className={styles.logosection}>
                <Link href="/">
                    <img src="/Images/logo.png" alt="logo" className={styles.logo} />
                </Link>
            </div>
            <div className={styles.headercontainer}>
                <div className={styles.headerlayout}>
                    {showArrow && (
                        <span onClick={handleArrow}>
                            <img src="/LeftArrow.svg" alt="left-arrow" />
                        </span>
                    )}
                    <span className={styles.discovertext}>{headerText}</span>

                    <Link href="/notification/NotificationPage">
                        <img src="/BellIcon.svg" alt="bell-icon" className={styles.bellicon} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header