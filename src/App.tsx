import React, { Suspense } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HeaderNavigation } from './components/HeaderNavigation';
import { ROUTE } from './constants/route';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import ShopAction from './store/actions/shopAction';
import startRootSaga from './store/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import ThemeContextProvider from './context/ThemeContext';
import { ErrorPage } from './containers/ErrorPage';
import HandleAllError from './components/HandleAllError';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(startRootSaga);

(window as any).shopspree = store;

const HomePage = React.lazy(() => import('./containers/HomePage'));
const AllProductsPage = React.lazy(() => import('./containers/AllProductsPage'));
const CheckoutPage = React.lazy(() => import('./containers/CheckoutPage'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <ThemeContextProvider>
            <HeaderNavigation />
            <HandleAllError>
              <Suspense fallback={null}>
                <Switch>
                  <Route exact component={CheckoutPage} path={ROUTE.CHECKOUT} />
                  <Route exact component={AllProductsPage} path={ROUTE.ALL_PRODUCTS} />
                  <Route exact component={ErrorPage} path={ROUTE.ERROR} />
                  <Route exact component={HomePage} path={ROUTE.HOME} />
                  <Redirect to="/" />
                </Switch>
              </Suspense>
            </HandleAllError>
          </ThemeContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
