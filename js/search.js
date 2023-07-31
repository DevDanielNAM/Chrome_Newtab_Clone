(function () {
  const searchInput = document.getElementById("search-input");
  const URL = "https://www.google.com/search?q=";

  const showSearchResult = () => {
    let searchWord = searchInput.value;
    window.location.href = URL + searchWord;
    searchWord = "";
  };

  const enterKey = (evnet) => {
    if (evnet.code === "Enter") {
      showSearchResult();
    }
  };

  searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
  });
})();
