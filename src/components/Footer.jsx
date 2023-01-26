import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div id="footerlogo">
          <img
            src={require("../logos/Asset 20@4x.png")}
            width="70px"
            height="70px"
            alt="logo"
          />
        </div>
        <div class="copyright">
          Copyright Little Lemon 2022. All rights reserved
        </div>
      </footer>
    </>
  );
}
