const obj = {
  a: 1,
  b: {
    c: 3,
    d: 4
  },
  e: undefined,
  f: new Date(),
  // g: function() {
  //   console.log('f')
  // },
  // h: Symbol()
}

const deepClone = (obj) => {
  return new Promise((resolve, reject) => {
    const mc = new MessageChannel()
    const port1 = mc.port1
    const port2 = mc.port2
    port2.onmessage = (e) => {
      resolve(e.data)
    }
    port2.onmessageerror = (e) => {
      reject(e)
    }
    port1.postMessage(obj)
  })
}

deepClone(obj).then((res) => {
  console.log(res)
  console.log(res === obj)
})