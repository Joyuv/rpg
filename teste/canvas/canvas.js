let dungeon = [
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0]
];
function dungeonVazia(n, m) {
  console.log("criando matriz:", n, "x", m)
  return Array.from({ length: n }, () => new Array(m).fill(0));
}

function randomDungeon(larg, alt, ite) {
  let dungeon = dungeonVazia(larg, alt)
  let xAt = 0
  let yAt = 0
  dungeon[xAt][yAt] = 1
  for (x = 0; x <= ite; x++) {
    const dir = Math.floor(Math.random() * 4)
    if (dir === 1) {
      if ((xAt + 1) > larg - 1) {
        console.log("largura máxima atingida")
      }
      else {
        xAt++
      }
    }
    else if (dir === 2) {
      if ((xAt - 1) < 0) {
        console.log("largura mínima atingida")
      }
      else {
        xAt--
      }
    }
    else if (dir === 3) {
      if ((yAt - 1) < 0) {
        console.log("altura mínima atingida")
      }
      else {
        yAt--
      }
    }
    else {
      if ((yAt + 1) > alt - 1) {
        console.log("altura máxima atingida")
      }
      else { yAt++ }
    }
    dungeon[xAt][yAt] = 1
  }
  return (dungeon)
}

function renderDungeonCanvas(dungeon) {
  let canvas = document.getElementById('dungeon-canvas');
  let ctx = canvas.getContext('2d');
  let cellSize = 20;

  canvas.width = dungeon[0].length * cellSize;
  canvas.height = dungeon.length * cellSize;

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  dungeon.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 1) {
        ctx.fillStyle = 'white';
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    });
  });
}
renderDungeonCanvas(randomDungeon(20, 20, 250));
