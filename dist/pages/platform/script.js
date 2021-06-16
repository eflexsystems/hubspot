window.addEventListener('scroll', () => {
	document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

LottieInteractivity.create({
	mode: 'scroll',
	player: '#lottie',
	container: '#lottieContainer',
	actions: [
		{
			visibility: [0, 0.125],
			type: "stop",
			frames: [0]
		},
		{
			visibility: [0.125, 0.95],
			type: "seek",
			frames: [0, 810]
		}
	],
});

const instance = basicLightbox.create(`
	<div>
		<video controls data-id="2">
		<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
	</div>
`)

document.querySelector('button.btn-video1').onclick = () => {
	instance.show();
}

document.querySelector('button.btn-video2').onclick = () => {
	instance.show();
}