import { EventEmitter } from 'events';
import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const { name, author } = require(join(__dirname, './package.json'));

const { say } = cfonts;

const rl = createInterface(process.stdin, process.stdout);

say('Mystic - Bot\nWhatsApp Bot MD', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
});

say(`MANUBOT`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
});

let isRunning = false;

/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return;
  isRunning = true;
  const args = [join(__dirname, file), ...process.argv.slice(2)];

  say('Ajuste la pantalla para escanear el código QR', {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  });

  setupMaster({
    exec: args[0],
    args: args.slice(1)
  });

  const p = fork();

  p.on('message', (data) => {
    console.log('[RECEIVED]', data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });

  p.on('exit', (_, code) => {
    isRunning = false;
    console.error('❎ Ocurrió un error inesperado:', code);

    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);

    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });

  const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();

  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }
}

start('main.js');
