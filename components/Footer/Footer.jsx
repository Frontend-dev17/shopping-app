import Link from "next/link";
import styles from "../../styles/Footer.module.css"

import { useState } from "react";



const Footer = () => {

    const [selectedItem, setSelectedItem] = useState('Home');



    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <footer className={styles.footer}>
            <nav className={styles.footernav}>
                <div
                    className={`${styles.navitem} ${selectedItem === 'Home' ? styles.selected : ''}`}
                    onClick={() => handleItemClick('Home')}
                >
                    <span className={styles.navicon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            style={{
                                stroke: selectedItem === 'Home' ? 'black' : 'grey',
                                fill: 'none',
                                strokeWidth: 2,
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                            }}
                        >
                            <path d="M8.5 17H16.5M11.5177 2.76403L4.73539 8.03916C4.28202 8.39178 4.05534 8.56809 3.89203 8.78889C3.74737 8.98447 3.6396 9.20481 3.57403 9.43908C3.5 9.70355 3.5 9.99073 3.5 10.5651V17.8C3.5 18.9201 3.5 19.4802 3.71799 19.908C3.90973 20.2843 4.21569 20.5903 4.59202 20.782C5.01984 21 5.57989 21 6.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V10.5651C21.5 9.99073 21.5 9.70355 21.426 9.43908C21.3604 9.20481 21.2526 8.98447 21.108 8.78889C20.9447 8.56809 20.718 8.39178 20.2646 8.03916L13.4823 2.76403C13.131 2.49078 12.9553 2.35415 12.7613 2.30163C12.5902 2.25529 12.4098 2.25529 12.2387 2.30163C12.0447 2.35415 11.869 2.49078 11.5177 2.76403Z" />
                        </svg>
                    </span>
                    <span className={`${styles.navtext} ${selectedItem === 'Home' ? styles.selectedtext : ''}`}>Home</span>
                </div>

                <div
                    className={`${styles.navitem} ${selectedItem === 'Saved' ? styles.selected : ''}`}
                    onClick={() => handleItemClick('Saved')}
                >
                    <span className={styles.navicon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="19"
                            viewBox="0 0 21 19"
                            style={{
                                stroke: selectedItem === 'Saved' ? 'black' : 'grey',
                                fill: 'none',
                                strokeWidth: '1.85',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                            }}
                        >
                            <path d="M10.4937 3.22563C8.64426 1.06352 5.56026 0.481919 3.24309 2.46176C0.925921 4.44161 0.599695 7.7518 2.41938 10.0934C3.79383 11.862 7.69845 15.4126 9.52691 17.0443C9.86303 17.3442 10.0311 17.4942 10.2279 17.5532C10.3987 17.6045 10.5886 17.6045 10.7594 17.5532C10.9562 17.4942 11.1243 17.3442 11.4604 17.0443C13.2889 15.4126 17.1935 11.862 18.5679 10.0934C20.3876 7.7518 20.1012 4.42078 17.7442 2.46176C15.3872 0.502745 12.3431 1.06352 10.4937 3.22563Z" />
                        </svg>
                    </span>
                    <span className={`${styles.navtext} ${selectedItem === 'Saved' ? styles.selectedtext : ''}`}>Saved</span>
                </div>
                <Link href='cart/CartPage' className={styles.link}>
                    <div
                        className={`${styles.navitem} ${selectedItem === 'Cart' ? styles.selected : ''}`}
                        onClick={() => {
                            handleItemClick('Cart')
                        }}
                    >
                        <span className={styles.navicon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                style={{
                                    stroke: selectedItem === 'Cart' ? 'black' : 'grey',
                                    fill: 'none',
                                    strokeOpacity: '0.6',
                                    strokeWidth: '2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                }}
                            >
                                <path d="M16.4996 8C16.4996 9.06087 16.0782 10.0783 15.328 10.8284C14.5779 11.5786 13.5605 12 12.4996 12C11.4387 12 10.4213 11.5786 9.67116 10.8284C8.92102 10.0783 8.49959 9.06087 8.49959 8M4.13281 7.40138L3.43281 15.8014C3.28243 17.6059 3.20724 18.5082 3.51227 19.2042C3.78027 19.8157 4.24462 20.3204 4.83177 20.6382C5.50006 21 6.40545 21 8.21623 21H16.783C18.5937 21 19.4991 21 20.1674 20.6382C20.7546 20.3204 21.2189 19.8157 21.4869 19.2042C21.7919 18.5082 21.7167 17.6059 21.5664 15.8014L20.8664 7.40138C20.737 5.84875 20.6723 5.07243 20.3285 4.48486C20.0257 3.96744 19.5748 3.5526 19.0341 3.29385C18.42 3 17.641 3 16.083 3L8.91623 3C7.35821 3 6.57921 3 5.9651 3.29384C5.42433 3.5526 4.97349 3.96744 4.67071 4.48486C4.32689 5.07243 4.26219 5.84875 4.13281 7.40138Z" />
                            </svg>
                        </span>
                        <span className={`${styles.navtext} ${selectedItem === 'Cart' ? styles.selectedtext : ''}`}>Cart</span>
                    </div>
                </Link>
                <div
                    className={`${styles.navitem} ${selectedItem === 'Settings' ? styles.selected : ''}`}
                    onClick={() => handleItemClick('Settings')}
                >
                    <span className={styles.navicon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{
                                stroke: selectedItem === 'Settings' ? 'black' : 'grey',
                                fill: 'none',
                                strokeOpacity: '0.6',
                                strokeWidth: '2',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                            }}
                        >
                            <path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.31510 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.5110 9.18687 18.9020 9.39510 19.3711Z" />
                            <path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z" />
                        </svg>
                    </span>
                    <span className={`${styles.navtext} ${selectedItem === 'Settings' ? styles.selectedtext : ''}`}>Settings</span>
                </div>
            </nav>
        </footer>

    )
}

export default Footer