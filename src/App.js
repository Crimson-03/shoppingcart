import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux/es/exports"
import Auth from "./components/auth/auth";
import Layout from "./components/layout/layout";
import Notification from "./components/notification/notification";
import { uiActions } from "./store/ui-slice";

let isFirstRender = true;

function App() {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false
      return;
    }
    const sendRequest = async () => {

      // send state as sending request
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: 'warning'
      }))

      const res = await fetch('https://shoppingcart-299b3-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      const data = await res.json();
      // send state as request is successfull
      dispatch(uiActions.showNotification({
        open: true,
        message: "sent request to database successfully",
        type: 'success'
      }))
    }
    sendRequest().catch(err => {
      // send state as request is successfull
      dispatch(uiActions.showNotification({
        open: true,
        message: "sending request failed",
        type: 'error'
      }))
    })

  }, [cart])


  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;