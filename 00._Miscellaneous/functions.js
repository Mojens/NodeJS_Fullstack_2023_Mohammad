function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min)
}

const r = random(0, 10)

console.log(r)

const randomAnonymousFunction = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min)
}

console.log(randomAnonymousFunction(0, 10))

const randomArrowFunction = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) - min)
}

console.log(randomArrowFunction(0, 10))

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min)

console.log(randomArrowFunctionCompact(0, 10))

function genericActionPerformer(genericAction, genericName) {
  return genericAction(genericName)
}

const subtract = (name) => `${name} is subtracting`

console.log(genericActionPerformer(subtract, 'Tobias'))

const walk = (name) => `${name} is walking`

console.log(genericActionPerformer(walk, 'Nicolas'))

genericActionPerformer((name) => console.log(`${name} is reading`), 'Andrea')