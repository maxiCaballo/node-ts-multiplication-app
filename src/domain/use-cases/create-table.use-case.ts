export interface CreateTableUseCase {
	execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
	base: number;
	limit?: number;
}

export class CreateTable implements CreateTableUseCase {
	constructor /** DI - Dependency Injection */() {}

	execute({ base, limit = 10 }: CreateTableOptions) {
		let finalOutput = '';
		for (let i = 1; i <= limit; i++) {
			const result = base * i;

			const output = `${base} x ${i} = ${result}\n`;
			finalOutput += output;
		}
		return finalOutput;
	}
}
