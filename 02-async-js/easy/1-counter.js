class Counter {
  #count;
  #intervalId;

  constructor() {
    this.#count = 0;
    this.#intervalId = undefined;
  }

  start() {
    if (!this.#intervalId)
      this.#intervalId = setInterval(this.#updateAndPrint, 1000);
  }

  #updateAndPrint = () => {
    this.#count++;
    process.stdout.write("\r");
    process.stdout.write(`Count: ${this.#count}`);
  };

  stop() {
    if (this.#intervalId) clearInterval(this.#intervalId);
    this.#count = 0;
  }

  get() {
    return this.#count;
  }
}

module.exports = Counter;
