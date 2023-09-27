import styles from "../../styles/CartPage.module.css";
import Header from '../../components/Header/Header'


import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useRouter } from "next/router";

const CartPage = () => {
    const router = useRouter();
    const { cartState, dispatch } = useContext(CartContext)

    const handleArrowNav = () => {
        router.push('/')
    }

    const handleRemoveItem = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    }
    const handleIncreaseQuantity = (itemId) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: itemId });
    }

    const handleDecreaseQuantity = (itemId) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
    }

    console.log(cartState)

    // Initialize these variables with numeric values
    let subTotal = 0;
    let vat = 0.0;
    let shippingFee = 80; // A fixed shipping fee
    let total = 0;


    // Calculate subTotal by considering the quantity of each item
    subTotal = cartState.cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace(',', '')); // Parse price as a float
        const quantity = item.quantity || 1; // Default to 1 if quantity is missing
        return total + price * quantity;
    }, 0);

    // Calculate total including VAT and shipping fee
    total = subTotal + subTotal * vat + shippingFee;

    console.log(cartState.cartItems)

    return (

        <div className={styles.cartpagecontainer}>
            <Header showArrow headerText="My Cart"
                handleArrow={handleArrowNav}
            />
            {
                cartState.cartItems.length > 0 ?
                    <>
                        <div style={{ height: "auto", marginBottom: "200px" }}>
                            <div className={styles.checkoutitemlist}>
                                {cartState.cartItems.map((item) => (

                                    <div className={styles.checkoutitemcard} key={item.id}>
                                        <span className={styles.trashicon} onClick={() => handleRemoveItem(item.id)}><img src="/TrashBin.svg" alt="TrashBin" /></span>
                                        <div className={styles.imagesection}>

                                            <img src={item.imageUrl} alt={item.name} className={styles.productimage} />
                                        </div>
                                        <div className={styles.details}>
                                            <div className={styles.name}>{item.name}</div>
                                            <div className={styles.size}>Size {item.size} </div>
                                            <div className={styles.price}>
                                                <div className={styles.priceamount}>INR {item.price}</div>
                                            </div>
                                        </div>
                                        <div className={styles.actionssection}>
                                            <span className={styles.actions} onClick={() => handleDecreaseQuantity(item.id)}>&minus;</span>
                                            <span>{item.quantity}</span>
                                            <span className={styles.actions} onClick={() => handleIncreaseQuantity(item.id)}>+</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.voucher}>
                                <input type="text" placeholder="Add a voucher" className={styles.voucherinput} />
                            </div>
                            <div className={styles.checkingoutdetails}>
                                <div className={styles.pricingdetails}>
                                    <span className={styles.title}>Sub-total</span>
                                    <span className={styles.price}>INR {subTotal}</span>
                                </div>
                                <div className={styles.pricingdetails}>
                                    <span className={styles.title}>VAT(%)</span>
                                    <span className={styles.price}>INR {vat}</span>
                                </div>
                                <div className={styles.pricingdetails}>
                                    <span className={styles.title}>Shipping fee</span>
                                    <span className={styles.price}>INR {shippingFee}</span>
                                </div>
                            </div>
                            <hr className={styles.hrtile} />
                            <div className={styles.totalsection}>
                                <span className={styles.total}>Total</span>
                                <span className={styles.price}>INR {total}</span>
                            </div>
                            <div className={styles.checkoutbtnsection}>
                                <button type="button" className={styles.checkoutbtn}>Checkout <img className={styles.rightarrow} src="/RightArrow.svg" alt="rightArrow" /></button>
                            </div>
                        </div>
                    </>
                    :
                    <div className={styles.cartepmtytext}>Cart is empty add items to cart</div>
            }
        </div>
    )
}

export default CartPage