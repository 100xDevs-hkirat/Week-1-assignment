const fs = require('fs/promises');

async function example() {
  try {
    const content = 'writing Some content to the file';
    await fs.writeFile('file.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();
