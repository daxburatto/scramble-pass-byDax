// Assignment code here

var answer = document.getElementById("#password")
var passLength = document.getElementById("#length")
var upperCase = document.getElementById("#upper")
var lowerCase = document.getElementById("#lower")
var number = document.getElementById("#numbers")
var symbol = document.getElementById("#special")
var generateBtn = document.querySelector("#generate")

const randomFunc = {
  upper : getRandomUpperCase,
  lower : getRandomLowerCase,
  number : getRandomNumber,
  symbol : getRandomSymbol
}

generateBtn.addEventListener('click', () => {
  const passLength = +length.value
  const hasUpper = ('upper').checked
  const hasLower = ('lower').checked
  const hasNumber = ('numbers').checked
  const hasSymbol = ('special').checked

  answer = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

function generatePassword(upper, lower, numbers, special, length) {
  var generatePassword = ''
  const typesCount = upper + lower + numbers + special
  console.log(typesCount)
  const typesArr = [{upper}, {lower}, {numbers}, {special}].filter(item => Object.values(item)[0])
  if (typesCount === 0) {
    return ''
  } 
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatePassword += randomFunc[funcName]()
    })
  }
  const finalPassword = generatePassword.slice(0, length)
  return finalPassword
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbol() {
  var symbol = "!@#$%^&*()=<>/,.|~?"
  return symbol[Math.floor(Math.random()*symbol.length)]
}

let me = document.getElementById("length").value

var btn = document.getElementById("generate")
generate.addEventListener('click', () => {
  console.log(me)
})

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
  debugger
}

generateBtn.addEventListener = ('click', writePassword)
console.log(generatePassword())
