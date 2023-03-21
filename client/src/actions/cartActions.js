export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      ad: menu.ad,
      _id: menu._id,
      img: menu.img,
      ozellik: menu.ozellik,
      kategori: menu.kategori,
      miktar: miktar,
      fiyat: menu.fiyat,
      topfiyat: menu.fiyat[0][ozellik] * miktar,
      desc: menu.desc,
    };
    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };
