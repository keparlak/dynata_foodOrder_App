import axios from "axios";
import Swal from "sweetalert2";

export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get(
      "http://localhost:4000/api/burgers/getBurgers"
    );
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};

export const deleteBurgerAction = (burgerid) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Emin misiniz?",
      text: "Bunun geri dönüşü yok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      const deleteResponse = await axios.post(
        "http://localhost:4000/api/burgers/deleteBurger",
        { burgerid }
      );
      Swal.fire("Silindi!", "Burger başarıyla silinmiştir.", "success");
      console.log(deleteResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

export const addBurgerAction = (menu) => async (dispatch) => {
  dispatch({ type: "ADD_BURGERS_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/burgers/addBurger",
      { menu }
    );

    console.log(response);
    dispatch({ type: "ADD_BURGERS_SUCCESS" });
    window.location.href("/admin/menulist");
  } catch (error) {
    dispatch({ type: "ADD_BURGERS_FAILED", payload: error });
  }
};
