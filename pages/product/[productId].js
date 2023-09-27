
import { useRouter } from 'next/router';
import SHOP_DATA from '../../components/ShopData/ShopData';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';

const ProductDetailsPage = () => {
    const router = useRouter();
    const { productId } = router.query;

    console.log(productId, 'id')

    const product = SHOP_DATA
        .flatMap((section) => section.items)
        .find((item) => item.id === parseInt(productId, 10));

    if (!product) {
        return <div>Product not found</div>;
    }

    return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
