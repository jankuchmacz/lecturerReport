import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
//import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { addGroup, startSetGroups } from './actions/group';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

/*const groups = [
  {
    id: '123',
    name: '13m4',
    studentsNumber: 13,
    lectures: 0,
    exercises: 15,
    laboratories: 15
  },
  {
    id: '124',
    name: '41m4',
    studentsNumber: 16,
    lectures: 15,
    exercises: 15,
    laboratories: 15
  },
  {
    id: '125',
    name: '13z',
    studentsNumber: 10,
    lectures: 15,
    exercises: 30,
    laboratories: 15
  }
];
*/

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetGroups()).then(()=>{
      renderApp();  
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
