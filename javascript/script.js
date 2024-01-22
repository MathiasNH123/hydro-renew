const hamburger = document.querySelector("#hamburger");
    const navUL = document.querySelector("#navUL");
    hamburger.addEventListener("click", () => {
        navUL.classList.toggle("show");
        hamburger.classList.toggle("active");
    });

    navUL.addEventListener("click", () => {
        navUL.classList.remove("show");
        hamburger.classList.remove("active");
    })