import Swal from "sweetalert2";

export const accountAlert = () => {
  Swal.fire({
    title:
      "Thank you for trying to register with us, we will let you know when we are available.",
    icon: "info",
    iconColor: "#E87A5D",
    closeOnConfirm: false,
    timer: false,
    confirmButtonText: "proceed",
    confirmButtonColor: "#E87A5D",
  });
};
