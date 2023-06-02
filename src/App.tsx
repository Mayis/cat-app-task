import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
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

