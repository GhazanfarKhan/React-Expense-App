import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import AppRouter from './routers/AppRoute';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
const store = configureStore();



// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading ...</p>, document.getElementById('root'));

store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));

});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
