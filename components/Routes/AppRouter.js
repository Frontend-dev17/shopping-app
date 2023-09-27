

import { useRouter } from 'next/router';
import HomePage from '../../pages/HomePage/HomePage';
import ProductDetailsPage from '../../pages/product/[productId]';
import CartPage from '../../pages/cart/CartPage';
import NotificationPage from '../../pages/notification/NotificationPage';

function AppRouter() {
    const router = useRouter();

    // Check if the current route matches the product details page route
    const isProductDetailsPage = router.pathname.startsWith('/product/');
    const isCartPage = router.pathname.startsWith('/cart');
    const isNotification = router.pathname.startsWith('/notification');


    return (
        <>
            {router.pathname === '/' && (
                <HomePage />
            )}
            {isProductDetailsPage && (
                <ProductDetailsPage />
            )}
            {isCartPage && (
                <CartPage />
            )}
            {
                isNotification && (
                    <NotificationPage />
                )
            }
        </>
    );
}

export default AppRouter;

