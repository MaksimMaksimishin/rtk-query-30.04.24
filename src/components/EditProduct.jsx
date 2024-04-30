import React, { useState } from "react";
import { useUpdateGoodMutation } from "../redux/goodsApi";

const EditProduct = ({ productId, initialName, onCancel }) => {
  const [productName, setProductName] = useState(initialName);
  const [updateGood] = useUpdateGoodMutation();

  const handleSaveChanges = async () => {
    try {
      await updateGood({ id: productId, name: productName }).unwrap();
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Failed to save changes!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditProduct