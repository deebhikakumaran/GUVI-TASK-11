let countdown = document.querySelector(".countdown")
let timer = 10
setTimeout(()=>{
    countdown.innerHTML = timer
    timer--
    setTimeout(()=>{
        countdown.innerHTML = timer
        timer--
        setTimeout(()=>{
            countdown.innerHTML = timer
            timer--
            setTimeout(() => {
                countdown.innerHTML = timer
                timer--
                setTimeout(()=>{
                    countdown.innerHTML = timer
                    timer--
                    setTimeout(()=>{
                        countdown.innerHTML = timer
                        timer--
                        setTimeout(()=>{
                            countdown.innerHTML = timer
                            timer--
                            setTimeout(()=>{
                                countdown.innerHTML = timer
                                timer--
                                setTimeout(()=>{
                                    countdown.innerHTML = timer
                                    timer--
                                    setTimeout(()=>{
                                        countdown.innerHTML = timer
                                        timer--
                                        setTimeout(()=>{
                                            if(timer===0) {
                                                countdown.innerHTML = 'Happy Independence Day'
                                            }
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000);
        },1000)
    },1000)
},1000)