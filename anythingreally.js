


class Clock {
    constructor() {
        const today = new Date();
        this.date = today
        this.hours = today.getHours();
        this.minutes = today.getMinutes();
        this.seconds = today.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000)
    }
    
    printTime() {
        // const n = this.date.toLocaleTimeString();
        const n = [this.hours, this.minutes, this.seconds].join(":");
        console.log(n);
    }
    
    _tick() {
        this._incrementSeconds();
        this.printTime();
    }

    _incrementSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours = (this.hours) % 24;   
    }
}

const clock = new Clock();
