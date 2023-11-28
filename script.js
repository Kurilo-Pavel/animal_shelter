const hideList = (element) => {
  const burger = document.getElementById("burger");
  burger.checked = false;
  lightScroll(element);
};

const lightScroll = (element) => {
  const link = document.getElementById(element.name.split("#")[1])
  const header = document.querySelector(".header")
  window.scroll(0, link.offsetTop - header.offsetHeight - 20);
};
