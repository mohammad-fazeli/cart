import React from "react";
import { Provider } from "react-redux";
import store from "./shared/redux/store";
import AppRoutes from "./shared/routes/AppRoutes";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRoutes />
    </Provider>
  );
}

export default App;
