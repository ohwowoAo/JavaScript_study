// https://www.omdbapi.com/?apikey=7035c60c

//쿼리스트링 s=frozen
// const res = fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')

// return new Promise()

// function loadImage(src){
//     return new Promise(resolve => { //완료를 보장하려는 자리에 resolve가 실행되어야함
//         const img = document.createElement('img')
//         img.src = src
//         img.addEventListener('load', () => {
//             resolve(img)
//        })
//     })
// }

function loadImage(src, callback){
    return new Promise(resolve => { //완료를 보장하려는 자리에 resolve가 실행되어야함
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
            resolve(img)
       })
    })
}
const imgContainer = document.querySelector('.image')


// ;(async () => {
//     const imgEl = await loadImage('https://gstatic.com/webp/gallery/1.jpg')
//     imgContainer.classList.add('loaded')
//     imgContainer.append(imgEl)
// })()

loadImage('https://gstatic.com/webp/gallery/1.jpg', imgEl => {
    imgContainer.classList.add('loaded')
    imgContainer.append(imgEl)
})