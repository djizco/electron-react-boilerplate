const { app, BrowserWindow } = require('electron');
const path = require('path');
const Positioner = require('electron-positioner');

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

function createWindow() {
  const win = new BrowserWindow({
    title: 'Electron React App',
    width: 800,
    height: 600,
    resizable: true,
    titleBarStyle: 'default',
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js'),
    },
  });

  const positioner = new Positioner(win);
  positioner.move('center');

  win.loadFile(path.join(app.getAppPath(), 'build/index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
