import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './store/reducers/index';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ItemsList from './components/ItemsList/ItemsList';

let myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {

  return (
    <Provider store={myStore}>
      <div className="App">
        <h3>Like Button</h3>
        <div className={'container'}>
          <ItemsList></ItemsList>
          <ShoppingCart></ShoppingCart>
        </div>
      </div>
    </Provider>
  );
}

export default App;
