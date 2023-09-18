class Clock {
  #time;
  #intervalId;

  constructor() {
    this.#time = new Date();
    this.#intervalId = undefined;
  }

  init() {
    if (!this.#intervalId) {
      this.#intervalId = setInterval(() => {
        const time24Hour = this.getTime("24h");
        const time12Hour = this.getTime("12h");

        process.stdout.write("\r");

        process.stdout.write(`24-Hour: ${time24Hour} | 12-Hour: ${time12Hour}`);

        this.#time.setSeconds(this.#time.getSeconds() + 1);
      }, 1000);
    }
  }

  getTime(format = "12h") {
    if (format === "24h")
      return this.#time.toLocaleTimeString("en-IN", { hour12: false });

    return this.#time.toLocaleTimeString("en-IN", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
}

module.exports = Clock;

// Comment below to see how it works
//const clock = new Clock();
//clock.init();
