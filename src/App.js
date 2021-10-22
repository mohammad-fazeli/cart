import React from "react";
import { Provider } from "react-redux";
import store from "./shared/redux/store";
import AppRoutes from "./shared/routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
