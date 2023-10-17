import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b: base, l: limit, s: show } = yarg;

console.log({ base, limit, show });

function tableOfFive(base: number, limit: number, show: boolean) {
	let finalOutput = '';
	for (let i = 1; i <= limit; i++) {
		const result = base * i;

		const output = `${base} x ${i} = ${result}\n`;
		finalOutput += output;
	}

	const outputPath = 'outputs';
	fs.mkdirSync(outputPath, { recursive: true });
	fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, finalOutput);

	if (show) console.log(finalOutput);
	console.log('File created!');
}

console.log(tableOfFive(base, limit, show));
