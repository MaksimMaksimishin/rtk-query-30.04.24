import React, { useState } from "react";
import { useAddGoodMutation } from "../redux/goodsApi";


const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [addGood, { isError }] = useAddGoodMutation();

  const handleAddProduct = async () => {
    try {
      await addGood({ name: productName }).unwrap();
      setProductName('');
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div className="add-product">
      <input
        type="text"
        placeholder="Enter product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      {isError && <div>Error: Failed to add product</div>}
    </div>
  );
};

export default AddProduct;