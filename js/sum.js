function drinkFlavor(flavor) {
  if (flavor == 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
}

module.exports = drinkFlavor;