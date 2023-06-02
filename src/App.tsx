import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// components
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Category from "./components/category/Category";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category">
            <Route path="/category/:category_id" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

