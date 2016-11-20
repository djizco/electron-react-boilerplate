const electron = require('electron');
const path     = require('path');
const Positioner = require('electron-positioner');

const BrowserWindow = electron.BrowserWindow;

const app = electron.app;

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    title: 'Electron React App',
    width: 800,
    height: 600,
    resizable: true,
    titleBarStyle: 'default',
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const positioner = new Positioner(mainWindow);
  positioner.move('center');
  mainWindow.loadURL(path.join('file://', __dirname, 'build', 'index.html'));
  // mainWindow.webContents.openDevTools(); // uncomment for develoment
});
