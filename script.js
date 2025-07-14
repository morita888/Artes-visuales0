const container = document.getElementById('grid-container');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', () => {
    cell.classList.toggle('active');
  });
  container.appendChild(cell);
}
