import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { checkoutOrderAction } from "../actions/orderActions";

function CheckoutPage({ toplamfiyat }) {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(checkoutOrderAction(token, toplamfiyat));
  };
  return (
    <>
      <StripeCheckout
        amount={toplamfiyat * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MooddGhsMk2ZLuugaySQIr4BLpDQ261x8khRjPkHcmtWWM2eSuiAoKg4U2l99UwVFLjPT23QwrLxXlQmILRiG0R00xDAsoGQK"
        currency="TRY"
      >
        <button className="mt-6 w-full rounded-md bg-gray-800 py-1.5 font-medium text-blue-50 hover:bg-gray-900">
          Check out
        </button>
      </StripeCheckout>
    </>
  );
}

export default CheckoutPage;
