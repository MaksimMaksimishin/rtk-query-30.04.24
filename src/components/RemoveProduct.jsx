import React from "react";
import { useRemoveGoodMutation } from "../redux/goodsApi";

const RemoveProduct = ({ productId }) => {
  const [removeGood] = useRemoveGoodMutation();

  const handleRemoveProduct = async () => {
    try {
      await removeGood(productId).unwrap();
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product!");
    }
  };

  return (
    <button onClick={handleRemoveProduct}>Delete</button>
  );
};

export default RemoveProduct;