const works = document.querySelector('.works').children;
const image = document.querySelector('.image');
let num;

for (let i = 0; i < works.length; i++) {
	works[i].onclick = () => {
		image.classList.remove('hidden');
		image.style.zIndex = 5;
		document.getElementById('i' + (i + 1)).classList.remove('hidden');
		num = i + 1;
		document.querySelector('body').style.overflow = 'hidden';
	};
}

const closeButton = document.getElementById('closeImage');

closeButton.onclick = () => {
	image.classList.add('hidden');
	image.style.zIndex = 0;
	document.getElementById('i' + num).classList.add('hidden');
	document.querySelector('body').style.overflow = 'auto';
};
