import { spawn } from 'child_process';
import path from 'path';
import { readdir, stat } from 'fs/promises';
import { fileURLToPath } from 'url';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the spec file name from command line arguments
const specFileName = process.argv[2];
console.log(specFileName);

if (!specFileName) {
    console.error('Please provide a spec file name');
    process.exit(1);
}

// Define the base directory where spec files are located
const baseSpecDir = path.join(__dirname, 'test', 'specs');

async function findSpecFile(dir, fileName) {
    const files = await readdir(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const fileStat = await stat(filePath);

        if (fileStat.isDirectory()) {
            const found = await findSpecFile(filePath, fileName);
            if (found) return found;
        } else if (file === fileName) {
            return filePath;
        }
    }

    return null;
}

(async () => {
    try {
        const specFilePath = await findSpecFile(baseSpecDir, specFileName);

        if (!specFilePath) {
            console.error(`Spec file '${specFileName}' not found`);
            process.exit(1);
        }

        console.log(`Running spec file: ${specFilePath}`);

        // Run the spec using npx and wrapping the path in quotes
        const child = spawn(
            'npx',
            ['wdio', 'run', './wdio.conf.js', '--spec', `"${specFilePath}"`],
            {
                stdio: 'inherit',
                shell: true,
            }
        );

        child.on('exit', (code) => {
            process.exit(code);
        });
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
})();
