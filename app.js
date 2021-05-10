$(".main").onepage_scroll({
  sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
  // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 500, // AnimationTime let you define how long each section takes to animate
  pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function (index) {
    msAppear();
  }, // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
  loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true, // You can activate the keyboard controls
  responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
  // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
  // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical", // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});

function msAppear() {
  const titlems = document.querySelector(".title-ms");
  const titlemx = document.querySelector(".title-mx");
  const titlemy = document.querySelector(".title-my");
  const titlepw = document.querySelector(".title-pw");
  const subtitlepw = document.querySelector(".subtitle-pw");
  const titleacc = document.querySelector(".title-acc");
  const footeracc = document.querySelector(".footer-acc");
  const btnms = document.querySelector(".div-btnS");
  const btnmx = document.querySelector(".div-btnX");
  const btnmy = document.querySelector(".div-btnY");
  const btnpw = document.querySelector(".div-btnPW");
  const btnacc = document.querySelector(".div-btnAcc");
  const activate = document.querySelectorAll("section");
  if (
    activate[1].className === "modelS section active" &&
    titlems.className != "title-ms text-appear"
  ) {
    console.log("hello");
    titlems.classList.add("text-appear");
    btnms.classList.add("text-appear");
  } else if (
    activate[2].className === "modelX section active" &&
    titlemx.className != "title-mx text-appear"
  ) {
    console.log("hello2");
    titlemx.classList.add("text-appear");
    btnmx.classList.add("text-appear");
  } else if (
    activate[3].className === "modelY section active" &&
    titlemy.className != "title-my text-appear"
  ) {
    console.log("hello3");
    titlemy.classList.add("text-appear");
    btnmy.classList.add("text-appear");
  } else if (
    activate[4].className === "powerwall section active" &&
    titlepw.className != "title-pw text-appear"
  ) {
    console.log("hello4");
    titlepw.classList.add("text-appear");
    subtitlepw.classList.add("text-appear");
    btnpw.classList.add("text-appear");
  } else if (
    activate[5].className === "accessoires section active" &&
    titleacc.className != "title-acc text-appear"
  ) {
    console.log("hello5");
    titleacc.classList.add("text-appear");
    footeracc.classList.add("text-appear");
    btnacc.classList.add("text-appear");
  } else {
    titlems.classList.remove("text-appear");
    btnms.classList.remove("text-appear");
    titlemx.classList.remove("text-appear");
    btnmx.classList.remove("text-appear");
    titlemy.classList.remove("text-appear");
    btnmy.classList.remove("text-appear");
    titlepw.classList.remove("text-appear");
    subtitlepw.classList.remove("text-appear");
    btnpw.classList.remove("text-appear");
    titleacc.classList.remove("text-appear");
    footeracc.classList.remove("text-appear");
    btnacc.classList.remove("text-appear");
  }
}
