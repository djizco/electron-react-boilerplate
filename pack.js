const electronPackager = require('electron-packager');

const options = {
  asar: true,
  dir: '.',
  ignore: 'app/*',
  out: 'dist',
  platform: 'darwin',
  name: 'Electron React',
};

electronPackager(options, (err, path) => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line
  console.log(`Success! See ${path}`);
});
