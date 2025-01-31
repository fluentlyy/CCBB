function handleMediaChange() {
  if (window.innerWidth <= 375) {
  } else if (window.innerWidth <= 1055) {
  } else if (window.innerWidth <= 1055) {
  } else {
  }
}

handleMediaChange();

window.addEventListener("resize", handleMediaChange);
