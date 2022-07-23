export default (products = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...products, action.payload];
    case "FETCH":
      return action.payload;
    case "DELETE":
      return products.filter((product) => product._id !== action.payload);
    case "UPDATE":
      return products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    default:
      return products;
  }
};
