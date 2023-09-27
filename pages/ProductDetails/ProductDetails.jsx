import styles from "../../styles/ProductDetails.module.css"

import Header from "../../components/Header/Header"
import { useRouter } from 'next/router';

import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext"



const ProductDetails = ({ product }) => {


    const [colorChange, setColorChange] = useState(false);
    const [selectedSize, setSelectedSize] = useState('S');
    const { cartState, dispatch } = useContext(CartContext)
    console.log("cartState", cartState)

    const router = useRouter();

    if (!product) {
        return <div>Product not found</div>;
    }
    const productId = product.id

    const handleColorChange = () => {
        setColorChange((prevHeartColor) => !prevHeartColor);
    };


    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    // const addToCart = () => {
    //     const productWithQuantity = { ...product, quantity: 1 };

    //     // Dispatch an action to add the product to the cart
    //     dispatch({ type: 'ADD_TO_CART', payload: productWithQuantity });
    // };

    const addToCart = () => {
        // Check if the product is already in the cart
        const existingItem = cartState.cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // If the product is already in the cart, increase its quantity by 1
            dispatch({ type: 'INCREASE_QUANTITY', payload: product.id });
        } else {
            // If the product is not in the cart, add it with a quantity of 1
            const productWithQuantity = { ...product, quantity: 1, size: selectedSize };
            dispatch({ type: 'ADD_TO_CART', payload: productWithQuantity });
        }
    };

    const handleArrowClick = () => {
        router.push('/'); // Navigate to the homepage
    };


    return (
        <div className={styles.productdetailscontainer}>
            <Header showArrow headerText="Details"
                handleArrow={handleArrowClick}
            />
            <div className={styles.imagecontainer}>
                <img src={product.imageUrl} alt={product.name} className={styles.productimage} />
                <span className={styles.hearticon}>
                    <img src="/HeartIcon.svg" className={`${styles.heart} ${colorChange ? styles.pinkclr : ''}`}
                        onClick={handleColorChange} />
                </span>
            </div>
            <div className={styles.namereviewsection}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.rating}> <img src="/StarIcon.svg" alt="rating-icon" /> {product.rating} <span className={styles.review}>{product.reviews}</span></div>
            </div>
            <div className={styles.productsizetext}>
                The name says it all, the right size sligtly snugs the body leaving enough room for comfort in the sleeves and waist.
            </div>
            <div className={styles.sizeoptionssection}>
                <div className={styles.size}>Choose Size</div>
                <div className={styles.sizeoptions}>
                    <div
                        className={`${styles.sizeoption} ${selectedSize === 'S' ? styles.selected : ''}`}
                        onClick={() => handleSizeClick('S')}
                    >
                        S
                    </div>
                    <div
                        className={`${styles.sizeoption} ${selectedSize === 'M' ? styles.selected : ''}`}
                        onClick={() => handleSizeClick('M')}
                    >
                        M
                    </div>
                    <div
                        className={`${styles.sizeoption} ${selectedSize === 'L' ? styles.selected : ''}`}
                        onClick={() => handleSizeClick('L')}
                    >
                        L
                    </div>
                </div>
            </div>
            <div className={styles.sizeselected}>
                <span>{`${selectedSize}`}</span> size is selected proceed with Add to Cart
            </div>
            <div className={styles.priceaddtocart}>
                <span className={styles.pricesection}>
                    <div className={styles.name}>Price</div>
                    <div className={styles.price}>INR {product.price}</div>
                </span>
                <span>
                    <Link href="/cart/CartPage" className={styles.linktext}>
                        <button type="button" className={styles.cartbutton} onClick={addToCart}><img src="/CartIcon.svg" alt="cart-icon" className={styles.carticon} />  Add To Cart</button>
                    </Link>
                </span>
            </div>

        </div>
    )
}

export default ProductDetails