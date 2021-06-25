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

document.querySelector('button#mip_cta1').onclick = () => {
	videoInstance.show();
	document.getElementById('video_mip').play();
}

videoLightroom('video_mip', 'https://f.hubspotusercontent00.net/hubfs/8439350/Videos/mip.mp4');