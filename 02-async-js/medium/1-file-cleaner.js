// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```



const fs = require('fs');

class FileCleaner {
    constructor(file_path, content) {
        this.file_path = file_path;
        this.content = content;
    }

    read_file() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.file_path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                const _data = data.toString().split(/\s+/).filter(Boolean).join(' ');
                this.content = this.content.concat(_data);
                console.log(this.content);
                resolve();
            });
        });
    }

    write_file() {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.file_path, this.content, 'utf8', (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                console.log('Saved!');
                resolve();
            });
        });
    }

    async clean_file() {
        try {
            await this.read_file();
            await this.write_file();
        } catch (error) {
            console.error(error);
        }
    }
}

// Example usage
const cleaner = new FileCleaner('file1.txt', '');
cleaner.clean_file();