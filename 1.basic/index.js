const mc = new MessageChannel()

const port1 = mc.port1
const port2 = mc.port2

port1.onmessage = (e) => {
  console.log(`port1 接收来自 port2 的消息：${e.data}`)
  port1.postMessage('你好 port2')
  // 断开连接
  port1.close()
}

// port1.addEventListener('message', (e) => {
//   console.log(`port1 接收来自 port2 的消息：${e.data}`)
//   port1.postMessage('你好 port2')
// })

port2.onmessage = (e) => {
  console.log(`port2 接收来自 port1 的消息：${e.data}`)
  port2.postMessage('你在写啥呢？')
}

// port2.addEventListener('message', (e) => {
//   console.log(`port2 接收来自 port1 的消息：${e.data}`)
// })

port2.postMessage('你好 port1')