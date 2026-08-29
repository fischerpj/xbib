document.addEventListener("pointerdown", event => {
  if (event.pointerType === "pen") {
    // Primary pen button (often "2")
    if (event.buttons === 2) {
      Reveal.next();
    }
    // Secondary pen button (often "4")
    if (event.buttons === 4) {
      Reveal.prev();
    }
  }
});
