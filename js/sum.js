function drinkAll(fn, flavor) {
	if(flavor !== 'octopus') fn.call(null, flavor);

}

module.exports = drinkAll;