import React from "react";
import Article from "./Articles";
import Button from "./Button";
import { handleBook } from "./helper";
import Form from "./Form";

export default function Home(props) {
  
  const [hide, setHide] = React.useState(true);
  return (
    <>
      <main>
        <div class="main-ad ">
          <h1>Little Lemon</h1><h2 className="chicago">Chicago</h2>
          <p className="main-p info">
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
        </div>

        <section>
          <Article hide={hide} setHide={setHide} />
        </section>
        {!hide ? <Form hide={hide} setHide={setHide} /> : null}
        
      </main>
      
    </>
  );
}
