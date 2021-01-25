const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener(
	'click',
	() => (sidebar.style.display = 'block')
);
closeIcon.addEventListener('click', () => (sidebar.style.display = 'none'));
