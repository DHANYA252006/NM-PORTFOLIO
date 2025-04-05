window.onscroll = function () {
  document.getElementById("topBtn").style.display = 
    window.scrollY > 100 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}