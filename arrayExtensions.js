Array.prototype.randomSelect = function() {
	const index = Math.floor(Math.random() * this.length)
	return this[index]
}

