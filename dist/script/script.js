// global script.js

$(window).load(function () {
	
	// Add Boostrap styles to hubspot
	$("[id^=cta_button]").addClass("btn");

	// Fade overlay once window is loaded.
	$("#loadingOverlay").fadeOut(400);
	
	// Pass hs module classes to children
	function hsChildInheritClass(selector) {
		const hsExcludedClasses = ['hs_cos_wrapper', 'hs_cos_wrapper_widget', 'hs_cos_wrapper_type_cta', 'hs_cos_wrapper_type_raw_html', 'hs_ancestor'];

		const ancestorElements = document.getElementsByClassName('hs_ancestor ' + selector);
		for (var i = 0; i < ancestorElements.length; i++) {
			const ancestorClasses = ancestorElements[i].classList;
			for (var j = 0; j < ancestorClasses.length; j++) {
				const ancestorClass = ancestorClasses[j];

				if (hsExcludedClasses.includes(ancestorClass)) { }
				else {
					$('.' + selector + '.hs_ancestor.' + ancestorClass + ' a').addClass(ancestorClass);
					$('.' + selector + '.hs_ancestor.' + ancestorClass).removeClass(ancestorClass);
				}
			}
		}
	};

	// Select cta modules
	hsChildInheritClass('hs_cos_wrapper_type_cta');

	// Responsive Images.. hsWrapperChildAddClass() doesn't work for image widget
	$(".hs-image-widget").addClass("w-100");
});

// scrollResponsiveHeader is for when the header can sit over a dark image as white text.
let scrollResponsiveHeader;

let videoInstance;

// html function for video lightroom component
function videoLightroom(id, src) {
	videoInstance = basicLightbox.create(
		`
			<div class='d-flex flex-column video-lightroom-container'>
				<button class='btn btn-link link-light btn-sm align-self-end mb-2' onclick='videoInstance.close()'>
					<i class='fas fa-times fa-lg'></i>
				</button>
				<video id="${id}" controls data-id="2">
				<source src=${src} type="video/mp4">
			</div>
		`
	);

	document.querySelector('button#' + id + '_cta').onclick = () => {
		videoInstance.show();
		document.getElementById(id).play();
	}
}