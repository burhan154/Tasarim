import React, { useState } from 'react';
import MainContainer from './app/index'
import { Provider } from "react-redux";
import configureStore from "./app/redux/store";

const store = configureStore();

export default function App({ navigation }) {
  return (
     <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
{/*<DrawerRoute />*/}