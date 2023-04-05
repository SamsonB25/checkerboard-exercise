// const container = document.createElement("div");
// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.width = "800px";
// container.style.height = "800px";

// for (let i = 1; i <= 64; i++) {
//   const tile = document.createElement("div");
//   tile.style.width = "12.5%";
//   tile.style.length = "12.5%";
//   tile.style.background = "red";

//   if (Math.floor((i - 1) / 8) % 2 === 0) {
//     if (i % 2 === 1) {
//       tile.style.backgroundColor = "black";
//     } else {
//       tile.style.backgroundColor = "red";
//     }
//   } else {
//     if (i % 2 === 1) {
//       tile.style.backgroundColor = "red";
//     } else {
//       tile.style.backgroundColor = "black";
//     }
//   }
//   container.append(tile);
// }

// document.body.append(container);
// console.log(document);

const container = document.createElement("div");
container.className = "container";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.position = "relative";

const rgb1 = [0, 255, 195];
const rgb2 = [255, 100, 25];

for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.style.width = "12.5%";
  tile.style.length = "12.5%";

  rgb1[1] -= 3;
  rgb2[2] -= 8;

  const row = Math.floor(i / 8);
  if (i % 2 === row % 2) {
    tile.style.backgroundColor = `rgb(0, ${rgb1[1]}, ${rgb2[2]})`;
  } else {
    tile.style.backgroundColor = `rgb(0, ${rgb1[1]}, ${rgb2[2]})`;
  }

  container.append(tile);
}

document.body.append(container);
console.log(document);
