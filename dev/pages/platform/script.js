// window.addEventListener('scroll', () => {
// 	document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

LottieInteractivity.create({
	player: '#lottie',
	container: '#lottieContainer',
	mode: 'scroll',
	actions: [
		{
			visibility: [0, 0.28],
			type: "stop",
			frames: [0]
		},
		{
			visibility: [0.28, 1.0],
			type: 'seek',
			frames: [0, 300],
		},
	],
  });