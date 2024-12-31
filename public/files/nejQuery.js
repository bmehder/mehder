// Utils
const identity = arg => arg

const pipe = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)

const compose = (...fns) => arg => fns.reduceRight((acc, fn) => fn(acc), arg)

const tap = fn => arg => (fn(arg), identity(arg))

// console functions
const log = console.log

const table = console.table

// Higher order array functions
const map = cb => arr => arr.map(cb ?? identity)

const filter = predicate => arr => [...arr].filter(predicate ?? identity)

const reduce = initial => cb => arr => [...arr].reduce(cb, initial ?? arr[0])

const sortNumbers = cb => arr => [...arr].sort(cb)

const find = cb => arr => arr.find(cb)

const every = cb => arr => arr.every(cb)

const some = cb => arr => arr.some(cb)

// Array functions
const join = sep => arr => arr.join(sep ?? '')

// String functions
const split = on => arr => arr.split(on ?? '')

// Helpers
const countItemsInArray = arg => arr => [...arr].filter(x => x === arg).length

const setCountMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map())

const removeDuplicates = arr => [...new Set(arr)]

const getLength = strOrNum => strOrNum.length

const reverseWord = str => [...String(str)].reverse().join('')

// Predicates
const isLetter = arg => arg.toLowerCase() !== arg.toUpperCase()

const isUpperCase = char => isLetter(char) && char === char.toUpperCase()

const isLowerCase = char => isLetter(char) && char === char.toLowerCase()

const isOdd = num => num % 2 !== 0

const isEven = num => num % 2 === 0

export default {
  pipe,
  identity, 
  compose,
  tap,
  log,
  table,
  map,
  filter,
  reduce,
  sortNumbers,
  find,
  every,
  some,
  join,
  split,
  countItemsInArray,
  setCountMap,
  removeDuplicates,
  getLength,
  reverseWord,
  isLetter,
  isUpperCase,
  isLowerCase,
  isOdd,
  isEven
}