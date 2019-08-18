const { app, BrowserWindow } = require('electron');
const path = require('path');
const Positioner = require('electron-positioner');

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    title: 'Electron React App',
    width: 800,
    height: 600,
    resizable: true,
    titleBarStyle: 'default',
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
    },
  });

  const positioner = new Positioner(mainWindow);

  positioner.move('center');
  mainWindow.loadFile(path.join(app.getAppPath(), 'build/index.html'));
});
