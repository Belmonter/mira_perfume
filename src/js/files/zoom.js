document.addEventListener('click', function (e) {
	let target = e.target;
	let zoomContainer = document.querySelector('.zoom-container');
	let reviewsZoom = document.querySelector('.reviews-zoom-container');

	if (!e.path.includes(zoomContainer) && zoomContainer.children.length > 0) {
		if (target.hasAttribute('data-zoom')) {
			setZoomImage('[data-zoom]', target, zoomContainer);
		} else {
			hideZoomImage(zoomContainer);
		}
	}

	if (!e.path.includes(reviewsZoom) && reviewsZoom.children.length > 0) {
		if (target.hasAttribute('reviews-zoom')) {
			setZoomImage('[reviews-zoom]', target, reviewsZoom);
		} else {
			hideZoomImage(reviewsZoom);
		}
	}

	setZoomImage('[data-zoom]', target, zoomContainer);
	setZoomImage('[reviews-zoom]', target, reviewsZoom);
});

function setZoomImage(attr, target, zoomContainer) {
	document.querySelectorAll(attr).forEach(el => {
		if (target === el && zoomContainer) {
			let image = el.cloneNode(true);
			image.removeAttribute(attr);
			zoomContainer.appendChild(image);
			zoomContainer.classList.remove('hide-zoom');
			zoomContainer.classList.add('show-zoom');
		}
	});
}

function hideZoomImage(zoomContainer) {
	zoomContainer.classList.remove('show-zoom');
	zoomContainer.classList.add('hide-zoom');
	setTimeout(() => (zoomContainer.innerHTML = ''), 300);
}
