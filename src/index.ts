import { spawn } from 'child_process';

console.log('lets dig some crates!');

console.log('setting things up');
const isProduction = process.env.NODE_ENV === 'production';
console.log(`isProduction:`, isProduction);
const batchFileLocation = 'batchFile.txt';
const args = [
  '--download-archive',
  'download-archive.txt',
  '-o',
  'downloads/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s',
  '--extract-audio',
  '--ignore-errors',
  '--audio-format',
  'best',
  '--batch-file',
  batchFileLocation
];
//if we are in production just dry run it
if (!isProduction) {
  args.push('--simulate');
}
console.log('spawning download process');
const youtube_dl = spawn(`youtube-dl`, args);

console.log('setting up event listeners');
youtube_dl.stdout.on('data', (data) => console.log(`stdout: ${data}`));
youtube_dl.stderr.on('data', (data) => console.log(`stderr: ${data}`));
youtube_dl.on('error', (error) => console.log(`error: ${error}`));
youtube_dl.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  return;
});
console.log('finished setting up event listeners');
