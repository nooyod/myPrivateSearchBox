const Searching = Search.prototype;

function Search() {
  this.keyword = document.querySelector('input[name = "search"]');
  this.engine = document.querySelector(".SelectSearch");
  this.button = document.querySelector(".img-button");
  this.form = document.querySelector(".search");

  this.Engine();
}
Searching.Engine = function () {
  this.form.addEventListener("submit", (e) => {
    e.preventDefault();

    let engine = this.engine.value;
    let keyword = this.keyword.value;

    if (engine === "google") {
      window.location.href = "https://www.google.co.kr/search?q=" + keyword;
    } else if (engine === "naver") {
      window.location.href = "https://search.naver.com/search.naver?query=" + keyword;
    } else if (engine === "kakaomap") {
        window.location.href = "https://map.kakao.com/?q=" + keyword;
    } else if (engine === "navermap") {
        window.location.href = "https://map.naver.com/search?query=" + keyword;
    }
  });
};

new Search();