const fs = require("fs");

const [rank, name] = process.argv.slice(2);

const createDirectory = (rank, name) => {
  const directory = `${__dirname}/src/${rank}/${name}`;

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  createBasicStructure(directory);
};

const createBasicStructure = (directory) => {
  fs.writeFileSync(`${directory}/index.html`, "");
  fs.writeFileSync(`${directory}/app.js`, "");

  fs.copyFileSync(`${__dirname}/index.html`, `${directory}/index.html`);
};

createDirectory(rank, name);
