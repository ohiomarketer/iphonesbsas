import React, { useEffect } from "react";

export const SpecialButton = () => {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    window.addEventListener("scroll", function () {
      if (window.scrollY >= 80) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      }
    });
  }, []);

  return (
    <a href="#top" className="go-top-btn" data-go-top>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  );
};
