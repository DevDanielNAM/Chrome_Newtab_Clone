(function () {
  const bookMarkBar = document.getElementById("bookmark-bar");
  const bookMarkOpen = document.getElementById("bookmark-open");
  const bookMarkClose = document.getElementById("bookmark-close");

  const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
  if (isBookMarkBarOpen === "close") {
    bookMarkBar.style.display = "none";
    bookMarkOpen.style.display = "none";
    bookMarkClose.style.display = "flex";
  } else {
    bookMarkBar.style.display = "block";
    bookMarkOpen.style.display = "flex";
    bookMarkClose.style.display = "none";
  }

  const bookMarkBarToggle = () => {
    let isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if (isBookMarkBarOpen === "close") {
      localStorage.setItem("isBookMarkBarOpen", "open");
      bookMarkBar.style.display = "block";
      bookMarkOpen.style.display = "flex";
      bookMarkClose.style.display = "none";
      return;
    }
    localStorage.setItem("isBookMarkBarOpen", "close");
    bookMarkBar.style.display = "none";
    bookMarkOpen.style.display = "none";
    bookMarkClose.style.display = "flex";
  };

  document
    .getElementById("bookmark-open-btn")
    .addEventListener("click", bookMarkBarToggle);
  document
    .getElementById("bookmark-close-btn")
    .addEventListener("click", bookMarkBarToggle);
})();
