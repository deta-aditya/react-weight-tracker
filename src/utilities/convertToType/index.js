const typeConvertMap = new Map([
	[String, value => String(value)],
	[Number, value => Number(value)],
	[Date, value => new Date(value)],
	[Boolean, value => Boolean(value)],
	[Array, (value, separator) => value.split(separator)],
])

function convertToType(value, type) {
	return typeConvertMap.get(type)(value)
}

export { convertToType }
