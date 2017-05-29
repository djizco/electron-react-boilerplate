const electronPackager = require('electron-packager');

const options = {
  arch: 'all',
  asar: true,
  dir: './',
  ignore: 'app/*',
  out: 'dist',
  platform: 'darwin',
  name: 'Electron React',
};

electronPackager(options, (err, path) => {
  if (err) { throw err; }
  console.log(`Success! See ${path}`);
});
