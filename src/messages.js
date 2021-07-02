const chalk = require("chalk");

const greeting = `${chalk.green(
  "=================================================="
)}
${chalk.blue("Team Profile Generator")}
${chalk.green("==================================================")}

Welcomt to the Team Profile Generator. This command
line application will generate an HTML file
featuring your team's information.

Just answer a few simple questions.

First, lets talk about the team manager.`;

const saved = `File successfully written as ${chalk.green("dist/index.html")}`;

module.exports.greeting = greeting;
module.exports.saved = saved;
