export function AlertSuccess(textTitle) {
  Swal.fire({
    position: "top",
    icon: "success",
    title: textTitle,
    showConfirmButton: false,
    timer: 2000,
  });
}

export function AlertError(textTitle) {
  Swal.fire({
    position: "top",
    icon: "error",
    title: textTitle,
    showConfirmButton: true,
    timer: 2000,
  });
}
