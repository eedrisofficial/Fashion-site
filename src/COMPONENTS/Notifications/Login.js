import Swal from "sweetalert2";

export const loginAlert = () => {
  Swal.fire({
    title: "Sorry, you don't have account with us!",
    iconColor: "#E87A5D",
    timer: false,
    confirmButtonText: "proceed",
    confirmButtonColor: "#E87A5D",
  });
};
