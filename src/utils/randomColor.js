const colors = [
  "yellow",
  "blue",
  "cyan",
  "red",
  "orange",
  "green",
  "purple",
  "teal",
  "pink",
  "gray",
];

export function randomColor(prevColor = null) {
  const color = colors[randomInt(0, colors.length - 1)];
  return color === prevColor ? randomColor(prevColor) : color;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
