
import { useState } from "react";
import Link from 'next/link';

import styles from "../../styles/ProductCard.module.css"

const ProductCard = ({ imageUrl, price, name, productId }) => {
    const [heartColorChange, setHeartColorChange] = useState(false);

    const handleColorChange = () => {
        setHeartColorChange((prevHeartColor) => !prevHeartColor);
    };

    return (

        <div className={styles.productcardcontainer}>
            <Link href={`../product/${productId}`}>
                <div className={styles.imagecontainer}>
                    <img src={imageUrl} alt={name} className={styles.productimage} />
                    <span className={styles.hearticon}>
                        <img src="/HeartIcon.svg" alt="heart-icon" className={`${styles.heart} ${heartColorChange ? styles.pinkclr : ''}`}
                            onClick={handleColorChange} />
                    </span>
                </div>
            </Link>
            <div className={styles.productdetails}>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>INR {price}</div>
            </div>
        </div>


    )
}

export default ProductCard;