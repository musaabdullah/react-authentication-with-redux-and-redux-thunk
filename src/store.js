import { combineReducers, applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';
import products from './reducers/products';

const reducers =  combineReducers({
    user: user,
    products: products
})

export default createStore(reducers,
     compose(applyMiddleware(thunk) ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));