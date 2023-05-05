const menuBtn = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const seeBtn = document.getElementById("see-more");
const moreProduct = document.getElementById("more-product");
const loginPage = document.getElementById("login");
const registerPage = document.getElementById("register");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const haveAnAcc = document.getElementById("have-an-account");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu");
});

seeBtn.addEventListener("click", () => {
  moreProduct.classList.toggle("b-s-only");

  if (moreProduct.classList.contains("b-s-only")) {
    seeBtn.innerHTML = `See More <i class="fa-solid fa-arrow-right"></i>`;
  } else {
    seeBtn.innerHTML = `See Less <i class="fa-solid fa-arrow-left"></i>`;
  }
});

loginBtn.addEventListener("click", () => {
  registerPage.classList.remove("form-display");
  loginPage.classList.add("form-display");
  loginBtn.classList.add("active-btn");
  registerBtn.classList.remove("active-btn");
});

haveAnAcc.addEventListener("click", () => {
  registerPage.classList.remove("form-display");
  loginPage.classList.add("form-display");
  loginBtn.classList.add("active-btn");
  registerBtn.classList.remove("active-btn");
});

registerBtn.addEventListener("click", () => {
  loginPage.classList.remove("form-display");
  registerPage.classList.add("form-display");
  registerBtn.classList.add("active-btn");
  loginBtn.classList.remove("active-btn");
});
