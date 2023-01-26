import React from "react";
import Button from "./Button";
import { handleBook } from "./helper";
export default function Article(props) {
  //   const handleBook = (booked) => {
  //     if (booked === "pasta") {
  //       props.setHide((prev) => !prev);
  //       console.log("is pasta");
  //     } else if (booked === "chicken") {
  //       props.setHide((prev) => !prev);
  //     } else if (booked === "burger") {
  //       props.setHide((prev) => !prev);
  //     } else {
  //       props.setHide(false);
  //     }
  //     console.log(booked, "booked oo");
  //   };
  return (
    <>
    <h1 className="specials">
      This weeks specials!
    </h1>
          <a className="frontpg">
      <Button className="frontpageButton" onClick={() => handleBook("frontpage", props)}>
           Reserve a Table
          </Button>
          </a>
      <section>
        <article className="content">
          

          <img src={require("../logos/pasta.jpg")} alt="Little lemon pasta" />
          
          <h3 className="Rigatoni">Greek Salad</h3> <h5 className="RigPrice">$ 13.99</h5>
          <p className="descriptions">
            The famous greek salad of crispy lettuce, peppers, olives, 
            and our Chicago style feta cheese, garnished with crunchy garlic
            and rosemary croutons.
          </p>
          <Button onClick={() => handleBook("pasta", props)}>
           Reserve a Table
          </Button>
        </article>
        <article className="content">
          
          <img
            src={require("../logos/recipe1.jpg")}
            alt="Little lemon fried chicken"
          />
          <h3 className="Rigatoni">Bruschetta</h3> <h5 className="RigPrice">$ 13.99</h5>
          <p className="descriptions">
            Our Bruschetta is made from grilled bread that has been smeared with 
            garlic and seasoned with salt and olive oil tastes like italy with a touch of love.
          </p>

          <Button onClick={() => handleBook("chicken", props)}>
           Reserve a Table
          </Button>
        </article>
        <article className="content">
          
          <img
            src={require("../logos/recipe2.jpg")}
            alt="Little lemon delicacy"
          />
          <h3 className="Rigatoni">Lemon Dessert</h3> <h5 className="RigPrice">$ 13.99</h5>
          <p className="descriptions">
            This comes straight from grandma's recipe book, every last ingredient has been sourced
            and is as authentic as can be imagined.
          </p>
          <Button onClick={() => handleBook("burger", props)}>
           Reserve a Table
          </Button>
        </article>
      </section>
    </>
  );
}
