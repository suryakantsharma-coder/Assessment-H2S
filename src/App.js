
import './App.css';
import CartSidebar from './components/CartSlideBar';
import Header from './components/Header';
import ProductCardGrid from './components/ProductCardGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <CartSidebar />
      <ProductCardGrid />
    </div>
  );
}

export default App;
