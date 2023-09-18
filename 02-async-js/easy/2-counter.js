class Counter {
  #count;
  #timeoutId;

  constructor() {
    this.#count = 0;
    this.#timeoutId = undefined;
  }

  start() {
    this.#timeoutId = setTimeout(() => {
      this.#updateAndPrint();
      this.start(); // Automatically restart the timer after each update
    }, 1000);
  }

  #updateAndPrint = () => {
    this.#count++;
    process.stdout.write("\r");
    process.stdout.write(`Count: ${this.#count}`);
  };

  stop() {
    if (this.#timeoutId) clearTimeout(this.#timeoutId);
    this.#count = 0;
  }

  get() {
    return this.#count;
  }
}

module.exports = Counter;
