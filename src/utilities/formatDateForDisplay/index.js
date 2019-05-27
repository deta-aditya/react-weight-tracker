function formatDateForDisplay(date) {
	const boxedDate = new Date(date)
	return `${boxedDate.getDate()}/${boxedDate.getMonth() + 1}/${boxedDate.getFullYear()}`
}

export { formatDateForDisplay }
