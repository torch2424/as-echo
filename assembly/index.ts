// The entry file of your WebAssembly module.

import { Console, CommandLine } from "as-wasi";

export function _start(): void {
  // Parse command line arguments
  let commandLine = new CommandLine();
  let args: Array<string> = commandLine.all();

  if (args.length < 2) {
    Console.log('Please pass an argument to echo');
    return;
  }

  Console.log(args[1]);
  
}
