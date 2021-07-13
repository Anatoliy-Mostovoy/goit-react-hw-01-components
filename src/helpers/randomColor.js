const renderColor = () => Math.round(Math.random() * (250 - 0) + 0);
const renderRGBColor = callback =>
  `rgb(${callback()}, ${callback()}, ${callback()})`;

export { renderColor, renderRGBColor };
