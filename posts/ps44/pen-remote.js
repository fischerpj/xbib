document.addEventListener("pointerdown", event => {
  // Pen button pressed
  if (event.pointerType === "pen") {
    // Button 1 → next slide
    if (event.buttons === 2) {
      Reveal.next();
    }
    // Button 2 → previous slide
    if (event.buttons === 4) {
      Reveal.prev();
    }
  }
});
