onmessage = (e) => {
  e.ports[0].postMessage("message from the worker2 port!");
}
