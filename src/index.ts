import { spawn } from 'child_process';

console.log('lets dig some crates!');

console.log('setting things up');
const playlistUrl =
  'https://www.youtube.com/playlist?list=PLvym70oeEfS7HN_xqxC1E7zjucWYBOnfK';

const youtube_dl_options = [
  '--download-archive',
  'download-archive.txt',
  `-o downloads/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s`
];

console.log('spawning download process');
const youtube_dl = spawn(`youtube-dl`, [...youtube_dl_options, playlistUrl]);

console.log('setting up event listeners');
youtube_dl.stdout.on('data', (data) => console.log(`stdout: ${data}`));
youtube_dl.stderr.on('data', (data) => console.log(`stderr: ${data}`));
youtube_dl.on('error', (error) => console.log(`error: ${error}`));
youtube_dl.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  return;
});
console.log('finished setting up event listeners');
