export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      ad: menu.ad,
      _id: menu._id,
      img: menu.img,
      ozellik: ozellik,
      kategori: menu.kategori,
      miktar: Number(miktar),
      fiyat: menu.fiyat,
      topfiyat: menu.fiyat[0][ozellik] * Number(miktar),
      desc: menu.desc,
    };
    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

export const deleteFromCartAction = (menu) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: menu });
  const cartItems = getState().addToCartReducer.cartItems;
  localStorage.removeItem("cartItems", JSON.stringify(cartItems));
};
