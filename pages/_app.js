
import { CartProvider } from '../contexts/CartContext';
import AppRouter from './../components/Routes/AppRouter';

const App = () => {
    return (
        <div className="App">
            <CartProvider>
                <AppRouter />
            </CartProvider>
        </div>
    );
}

export default App;
