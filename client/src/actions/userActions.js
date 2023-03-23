import axios from "axios";
import Swal from "sweetalert2";

export const registerUserAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      user
    );
    console.log("Register Response", response);

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kullanıcı Kaydı Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Böyle bir kullanıcı var!",
    });
  }
};

export const loginUserAction = (user) => async (dispatch, getState) => {
  dispatch({ type: "GET_LOGIN_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      user
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User Logged In!",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "GET_LOGIN_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User not found.",
    });
  }
};
export const logoutUserAction = () => {
  localStorage.removeItem("currentUser");
  console.log("Şuan Çıkış Yapıldı");
  window.location.href = "/login";
};
