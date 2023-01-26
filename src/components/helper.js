export const handleBook = (booked, props) => {
  if (booked === "pasta") {
    props.setHide((prev) => !prev);
    console.log("is pasta");
  } else if (booked === "chicken") {
    props.setHide((prev) => !prev);
  } else if (booked === "burger") {
    props.setHide((prev) => !prev);
  } else if (booked === "frontpage") {
    props.setHide((prev) => !prev);
  } else {
    props.setHide(false);
  }
  //for testing
  // if (booked === "pasta") {
  //   return booked;
  // }
  // if (booked === "burger") {
  //   return booked;
  // }
  // console.log(booked, "na pasta");
};
