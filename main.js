// 화살표 함수
// () => {} vs function () {}

const double = function (x, y) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = x => x * 2
console.log('doubleArrow', doubleArrow(7))

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double1();

function double1() {
  console.log(a * 2)
}

(function double1() {
  console.log(a * 2)
})();

(function double1() {
  console.log(a * 2)
}());

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log('HEROPY')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const timer1 = setInterval(() => {
  console.log('HEROPY1')
}, 3000)

const h1El1 = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer1)
})

// 콜백(Callback)
// 함수의 진수로 사용되는 함수

// ex) setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})