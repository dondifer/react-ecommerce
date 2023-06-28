import { useContext, useEffect } from "react";

import { ProductsContext } from "../../context/ProductState";

const Products = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    console.log("productostos", products);
  }, []);

  return (
    <div>
      <div>
        <h2>Products</h2>
      </div>
    </div>
  );
};

export default Products;
