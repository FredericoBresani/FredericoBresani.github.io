var e;self.onmessage=s=>{s.data?a():(clearInterval(e),e=null)};var a=()=>{e=setInterval(()=>{self.postMessage(!0)},1e3)};
