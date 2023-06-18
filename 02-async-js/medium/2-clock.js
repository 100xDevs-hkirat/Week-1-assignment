class Clock {
    constructor() {
        const date = new Date();

        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
    }

    update() {
        if (this.second < 59) {
            this.second++;
        }
        else {
            this.second = 0;
            if (this.minute < 59) {
                this.minute++;
            }
            else {
                this.minute = 0;
                if (this.hour < 23) {
                    this.hour++;
                }
                else {
                    this.hour = 0;
                }
            }
        }
    }

    display24() {
        console.log(this.hour + ':' + this.minute + ':' + this.second);
    }
    display12() {
        if (this.hour < 13) {
            console.log(this.hour + ':' + this.minute + ':' + this.second + ' ' + 'AM');
        }
        else {
            console.log((this.hour % 12) + ':' + this.minute + ':' + this.second + ' ' + 'PM');
        }
    }
}

function nextSecond() {
    clock.update();
    clock.display12();
}

let clock = new Clock;

setInterval(nextSecond, 1000);