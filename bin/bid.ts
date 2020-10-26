#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var yargs = require("yargs");

var options = yargs
  .usage("Usage: -c <cpt (ex: 1.3)> -p <ex: 148>")
  .option("c", {
    alias: "cpt",
    describe: "cost per tap",
    type: "number",
    demandOption: true,
  })
  .option("p", {
    alias: "projected",
    describe: "1 day projected return",
    type: "number",
    demandOption: true,
  }).argv;

const bidFunction = (options: any) => {


  // if (options.projected > 250) return "set MAX bid";
  // if (options.projected < 50) return "set MIN bid";

  if (options.projected > 160) {
    const diff = Math.abs(options.projected - 150) / 150;
    const final = options.cpt + options.cpt * diff;
    return final.toFixed(2)
  }

  if (options.projected < 140) {
    const diff = Math.abs(options.projected - 150) / 150;
    const final = options.cpt - options.cpt * diff
    return final.toFixed(2)
  }

  return "NO change";
};

console.log(bidFunction(options));
