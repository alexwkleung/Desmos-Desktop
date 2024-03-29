import { app, BrowserWindow } from 'electron';

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 900
    })
    mainWindow.loadFile('views/index.html')
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})