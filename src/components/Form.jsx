import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "./Button";
export default function Form(props) {
  const { hide, setHide } = props;
  const handleReset = () => {
    formik.handleReset();
    setHide((prev) => !prev);
  };
  const signupSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").required("Required"),
    title: Yup.string().min(5, "Too Short!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      title: "",
      time: "",
      guest: "",
      occasion: "",
    },
    validationSchema: signupSchema,

    onSubmit: (values) => {
      console.log(values, "values");
      toast.success("Thanks for booking!");
      handleReset();
    },
  });

  return (
    <>
      {!hide ? (
        <>
          <p
            className="form-removal"
            onClick={() => {
              setHide((prev) => !prev);
              console.log("best");
            }}
          >
            x
          </p>

          <form className="booking-form" onSubmit={formik.handleSubmit}>
            <h3 className="book" style={{ padding: 5 }}>
              Booking Form
            </h3>
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="john doe"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username && formik.touched.username ? (
                <p style={{ color: "#8B0000", fontSize: 14 }}>
                  {formik.errors.username}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="johndoe@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <p style={{ color: "#8B0000", fontSize: 14 }}>
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="e.g fried chicken"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title && formik.touched.title ? (
                <p style={{ color: "#8B0000", fontSize: 14 }}>
                  {formik.errors.title}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="title">Choose Time</label>
             <select id="res-time ">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              </select>
              <label > Number of Guests</label>
              <input 
              onSubmit={formik.values.guest}
              type="number" placeholder="1" min="1" max="10" id="guests"  />
              {formik.errors.title && formik.touched.title ? (
                <p style={{ color: "#8B0000", fontSize: 14 }}>
                  {formik.errors.title}
                </p>
              ) : null}
              <label for="occasion">Occasion</label>
              <select id="occasion">
                 <option>Birthday</option>
                 <option>Anniversary</option>
                 <option>Other</option>
              </select>
              
             </div>


            <div className="form-group">
              <Button type="submit">Submit Form</Button>
            </div>
          </form>
        </>
      ) : null}
    </>
  );
}
