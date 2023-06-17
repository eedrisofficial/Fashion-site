import React, { useContext } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { GlobalContext } from "../../Context/GlobalState";

const FlutterPay = () => {
  const { state } = useContext(GlobalContext);

  const config = {
    public_key: "FLWPUBK_TEST-d8ab65dc58a2ac1d980e96719cc1a0e7-X",
    tx_ref: Date.now(),
    amount: state.total,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "eedrisharuna3@gmail.com",
      phone_number: "+2348132624679",
      name: "Idris",
    },
    customizations: {
      title: "Reed's Fashion",
      description: "Payment for items in cart",
      logo: "https://lh3.googleusercontent.com/a/AAcHTtfOej-gN7jVTJBEyMQSrJGRL6Tq1jKGxdGvqLmRkQ=s192-c-rg-br100",
    },
  };

  const fwConfig = {
    ...config,
    text: "Checkout",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <FlutterWaveButton {...fwConfig} className=" text-bold text-xl w-3/4" />
  );
};

export default FlutterPay;
