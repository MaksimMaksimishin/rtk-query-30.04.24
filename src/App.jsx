import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import { useGetGoodsQuery } from "./redux/goodsApi";


const App = () => {
  const { data = [], isLoading } = useGetGoodsQuery();

  return (
    <Provider store={ store }>
      <div className="container">
        <h1>RTK Query</h1>

        <AddProduct />

        {
          isLoading 
            ? <h3>Loading ...</h3>
            : <ProductsList data={ data }/>
        }
      </div>
    </Provider>
  );
};

export default App;