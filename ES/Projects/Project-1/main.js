function handleMediaChange() {
  if (window.innerWidth <= 375) {
    document.querySelector(".about-projects__imgs").innerHTML = `
              <div class="img__small"></div>
              <div class="img__small"></div>
              <div class="img__small"></div>
              <div class="img__small"></div>
              <div class="img__small"></div>
              <div class="mid__img"></div>
            `;
  } else if (window.innerWidth <= 1055) {
    document.querySelector(".about-projects__imgs").innerHTML = `
              <div class="img__small"></div>
              <div class="img__small"></div>
              <div class="img__small"></div>
              <div class="img__small"></div>
              <div class="mid__img"></div>
            `;
  } else if (window.innerWidth <= 1055) {
    document.querySelector(
      ".about-projects__imgs"
    ).innerHTML = `<div class="about-projects__imgs">
  <div class="left__imgs">
    <div class="img__small"></div>
    <div class="img__small"></div>
    <div class="img__small"></div>
  </div>
  <div class="right__imgs">
    <div class="img__small"></div>
    <div class="mid__img"></div>
  </div>
</div>`;
  } else {
  }
}

handleMediaChange();

window.addEventListener("resize", handleMediaChange);
