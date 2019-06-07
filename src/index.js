import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRoute';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const rederApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            rederApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    }
    else {
        store.dispatch(logout());
        rederApp();
        history.push('/');
    }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
