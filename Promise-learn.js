// promise 基本用法
const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let n = rand(1,100)
    if(n <= 30){
      // Promise状态设为成功，返回成功信息为 n
      resolve(n)
    } else {
      // Promise状态设为失败，返回失败信息为 n
      reject(n)
    }
  }, 1000)
})

// then 双参数写法
p.then((value)=>{
  alert('成功信息：' + value)
}, (reason)=>{
  alert('失败信息：' + reason)
})

// then + catch 写法
p.then(value => {
  alert('成功信息：' + value)
}).catch(reason => {
  alert('失败信息：' + reason)
})
