import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux/es/exports"
import Auth from "./components/auth/auth";
import Layout from "./components/layout/layout";
import Notification from "./components/notification/notification";
import { uiActions } from "./store/ui-slice";
import { fetchData, sendCartData } from "./store/cart-actions";

let isFirstRender = true;

function App() {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch])


  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;