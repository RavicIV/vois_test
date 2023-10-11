import './App.css';
import items from './mocks/item.json'
import { useSelector } from 'react-redux'
import background from './assets/bg.png';

import Header from './components/header/header';
import Shop from './components/shop/shop';

function App() {
  const itemsInCart = useSelector((state) => state.vois.itemsInCart)

  return (
    <div className="App" style={{ 
      backgroundImage: `url(${background})`
    }}>
      <Header cart={itemsInCart}></Header>
      <Shop items={items}></Shop>
    </div>
  );
}

export default App;
