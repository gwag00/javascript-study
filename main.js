// 삼항 연산자(ternary operator)

const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')

import random from './getRandom'

// 조건문 (If, Switch statement)

const b = random()

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('rest...')
    break
  default: 
    console.log('rest...')
}

if (a === 0) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else {
  console.log('rest...')
}