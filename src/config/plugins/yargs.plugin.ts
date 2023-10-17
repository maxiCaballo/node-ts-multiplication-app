import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'; //Me oculta el path desde donde estoy ejecutando el comando

export const yarg = yargs(hideBin(process.argv))
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true, //Si no me mandan el argumento salta un error
		describe: 'Multiplication table base',
	})
	.option('l', {
		alias: 'limit',
		type: 'number',
		describe: 'Multiplication table limit',
		default: 10,
	})
	.option('s', {
		alias: 'show',
		type: 'boolean',
		describe: 'Show multiplication table',
		default: false,
	})
	.option('n', {
		alias: 'name',
		type: 'string',
		default: `multiplication-table.txt`,
		describe: 'File name',
	})
	.option('d', {
		alias: 'destination',
		type: 'string',
		default: 'outputs',
		describe: 'File destination',
	})
	.check((argv, options) => {
		if (argv.b < 1) throw 'Error: base must be > 1';

		return true;
	})
	.parseSync();
