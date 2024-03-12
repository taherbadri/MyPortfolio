export const slideInFromLeft = (delay) => {
	return {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.5,
			},
		},
	};
};

export const slideInFromRight = (delay) => {
	return {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.5,
			},
		},
	};
};
export const slideInFromTop = (delay) => {
	return {
		hidden: { y: -100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.5,
			},
		},
	};
};
export const slideInFromBottom = (delay) => {
	return {
		hidden: { y: 100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.5,
			},
		},
	};
};
