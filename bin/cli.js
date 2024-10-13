#!/usr/bin/env node
import { program } from 'commander';
import initCommand from '../src/commands/init';
import generateCommand from '../src/commands/generate';
import helpCommand from '../src/commands/help';

program
  .command('init')
  .description('Inicializa un nuevo proyecto')
  .action(initCommand);

program
  .command('generate <type>')
  .description('Genera un archivo o componente')
  .action(generateCommand);

program
  .command('help')
  .description('Muestra ayuda')
  .action(helpCommand);

program.parse(process.argv);
