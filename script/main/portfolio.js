$(document).ready(function () {
	$('.only-mobile.category-button').on('click', function () {
		if ($('.tabs .nav__tab').is(':visible')) {
			$('.tabs .nav__tab').slideUp();
		} else {
			$('.tabs .nav__tab').slideDown();
		}
	});
});
//SEE MORE

const content = document.querySelector('.tab_card');
const buttonShowMore = document.querySelector(
	'.portfolio__btn .portfolio__show-more'
);
const buttonShowLess = document.querySelector(
	'.portfolio__btn .portfolio__show-less'
);
const button = document.querySelector('.portfolio__btn');
const arrowIcon = document.querySelector('.portfolio__btn .fas');
const initial = {
	showAllContent: true
};

button.addEventListener('click', () => {
	const defaultValue = {
		element: arrowIcon,
		currentIcon: 'fa-chevron-down',
		newIcon: 'fa-chevron-up'
	};

	if (initial.showAllContent) {
		showButton(buttonShowLess);
		showButton(buttonShowMore, false);

		content.classList.remove('gradient', 'maxHeight');
	} else {
		showButton(buttonShowLess, false);
		showButton(buttonShowMore);
		content.classList.add('gradient', 'maxHeight');
	}

	initial.showAllContent = !initial.showAllContent;
});

function showButton(button, visible = true) {
	!visible
		? button.classList.add('d-none')
		: button.classList.remove('d-none');
}
