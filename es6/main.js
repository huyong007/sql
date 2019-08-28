const a = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail1')), 3000)
})

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail2')), 3000)
})

const b = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000);
})

b
    .then(result => console.log(result))
    .catch(error => console.log(error))



const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(a), 1000)
})

p2
    .then(result => console.log(result))
    .catch(error => console.log(error))