//4
console.log('start')
const fn = () => (new Promise((resolve, reject) => {
console.log(1);
resolve('success')
}))
console.log('middle')
fn().then(res => {
console.log(res)
})
//output: start,middle,1,success
