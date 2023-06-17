import Swal from "sweetalert2";

export const contactAlert = () => {
  Swal.fire({
    title: "Message sent successfully",
    icon: "success",
    iconColor: "#E87A5D",
    timer: 3000,
    confirmButtonColor: "#E87A5D",
  });
};
