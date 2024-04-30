import React, { useState } from "react";
import RemoveProduct from "./RemoveProduct";
import EditProduct from "./EditProduct";

const ProductsList = ({ data }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditProduct = (productId, productName) => {
    setEditingProduct({ productId, productName });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <>
      <div className="products">
        <h3>Products list</h3>
        <ul className="products__list">
          {data.map((item) => (
            <li key={item.id} className="products__item">
              {editingProduct && editingProduct.productId === item.id ? (
                <>
                  <EditProduct
                    productId={item.id}
                    initialName={item.name}
                    onCancel={handleCancelEdit}
                  />
                </>
              ) : (
                <>
                  {item.name}
                  <button onClick={() => handleEditProduct(item.id, item.name)}>Edit</button>
                  <RemoveProduct productId={item.id} />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsList;