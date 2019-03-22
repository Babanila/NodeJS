#!/usr/bin/env node

const fs = require("fs");
const yargs = require("yargs");
const PrettyError = require("pretty-error");
const { houseSearch } = require("./main");
const { description } = require("./package.json");

process.title = "houseSearch";

const args = yargs
  .usage(
    `
Usage: $0 [options]
${description}`
  )
  .showHelpOnFail(false)
  .option("output", {
    alias: "o",
    default: "stdout",
    describe: "Path to output file."
  })
  .coerce("output", arg => {
    if (arg !== "stdout") return fs.createWriteStream(String(arg));

    return process.stdout;
  })
  .option("houseData", {
    alias: "h",
    describe: "House data to sort.",
    demand: true
  })
  .option("where", {
    alias: "w",
    describe: "Specify where predicate."
  })
  .option("logLevel", {
    default: "info",
    describe: "Logging level: error, warn, info or debug."
  })
  .option("prettyLogs ", {
    describe: "Pretty print logs to the terminal",
    type: "boolean"
  })
  .option("logFile", {
    default: "defaultLogFile",
    describe: "Path to where to save logs file.",
    type: "string"
  }).argv;

if (args.output === process.stdout)
  logDestination = fs.createWriteStream(args.logFile);

const logError = error => {
  const errorFormatter = new PrettyError();

  if (args.logLevel === "debug")
    process.stderr.write(`ERR: ${errorFormatter.render(error)}`);
  else process.stderr.write(`ERR: ${error.message || error}`);
};

const errorHandler = errors => {
  if (Array.isArray(errors)) errors.forEach(logError);
  else logError(errors);

  process.exitCode = 1;
};

// Register error listener
args.output.on("error", errorHandler);

async function execute() {
  try {
    const options = {
      houseData: args.houseData
    };

    houseSearch(options);

    process.exit();
  } catch (error) {
    errorHandler(error);
  }
}

execute();
