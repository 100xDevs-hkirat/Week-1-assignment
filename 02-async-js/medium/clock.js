

(()=>{
    const interval=setInterval(()=>{
        console.log(new Date().toLocaleString('en-US', { hour: 'numeric',hour:"2-digit", minute: 'numeric',minute:"2-digit",  second:'numeric', second:"2-digit", hour12: false }))
        console.log(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12:true }))
    },1000)

})()