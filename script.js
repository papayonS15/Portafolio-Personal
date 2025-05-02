document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  const body = document.getElementById('body');
  if (body.classList.contains('bg-white')) {
    body.classList.replace('bg-white', 'bg-gray-900');
    body.classList.replace('text-black', 'text-white');
  } else {
    body.classList.replace('bg-gray-900', 'bg-white');
    body.classList.replace('text-white', 'text-black');
  }
});
