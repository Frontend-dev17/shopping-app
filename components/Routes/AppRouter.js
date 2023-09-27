// import { useRouter } from 'next/router';
// import HomePage from './../../pages/HomePage/HomePage';

// function AppRouter() {
//     const router = useRouter();

//     return (
//         <>
//             {router.pathname === '/' && (
//                 <HomePage />
//             )}
//         </>
//     );
// }

// export default AppRouter;

// components/Routes/AppRouter.js

import { useRouter } from 'next/router';
import HomePage from '../../pages/HomePage/HomePage';
import ProductDetailsPage from '../../pages/product/[productId]'; // Import the product details page
import CartPage from '../../pages/cart/CartPage';
import NotificationPage from '../../pages/notification/NotificationPage';

function AppRouter() {
    const router = useRouter();

    // Check if the current route matches the product details page route
    const isProductDetailsPage = router.pathname.startsWith('/product/');
    const isCartPage = router.pathname.startsWith('/cart'); // Use startsWith to check for a path
    const isNotification = router.pathname.startsWith('/notification'); // Use startsWith to check for a path


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

