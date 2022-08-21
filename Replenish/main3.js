// // import xyz, {a as x, d as y} from './abc.js'
// import * as xyz from './abc.js'
// //import 기본, {이름1, 이름2, 이름3} from '경로'

// console.log(xyz)
// console.log(x)
// console.log(d)

console.log(123)

;(async () => {
    await import('./abc.js')
})