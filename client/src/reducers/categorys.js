export default (categorys = [], action) => {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return [...categorys, action.payload];
    case "FETCH_CATEGORY":
      return action.payload;
    case "DELETE_CATEGORY":
      return categorys.filter((category) => category._id !== action.payload);
    case "UPDATE_CATEGORY":
      return categorys.map((category) =>
        category._id === action.payload._id ? action.payload : category
      );
    default:
      return categorys;
  }
};
