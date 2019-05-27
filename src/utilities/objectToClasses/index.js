function objectToClasses(classes) {
	return Object.entries(classes)
		.filter(([key, value]) => value)
		.map(([key, value]) => key)
		.join(' ')
}

export { objectToClasses }
