function clock1() {
    setInterval(() => {
        console.clear();
        let time = new Date();
        let hr = (time.getHours() > 9) ? time.getHours() : '0' + time.getHours();
        let min = (time.getMinutes() > 9) ? time.getMinutes() : '0' + time.getMinutes();
        let sec = (time.getSeconds() > 9) ? time.getSeconds() : '0' + time.getSeconds();
        console.log(hr + ':' + min + ':' + sec);
    }, 1000);
}

clock1();

function clock2() {
    setInterval(() => {
        console.clear();
        let time = new Date();
        let suffix = (time.getHours() > 11) ? 'PM' : 'AM';
        let hr = (time.getHours() > 12) ? time.getHours() % 12 : time.getHours();
        hr = (hr > 9) ? hr : '0' + hr;
        let min = (time.getMinutes() > 9) ? time.getMinutes() : '0' + time.getMinutes();
        let sec = (time.getSeconds() > 9) ? time.getSeconds() : '0' + time.getSeconds();
        console.log(hr + ':' + min + ':' + sec, suffix);
    }, 1000);
}

//clock2();