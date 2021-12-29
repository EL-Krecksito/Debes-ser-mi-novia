const { app, BrowserWindow } = require('electron')

let window

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform == 'darwin') {
        app.quit()
    }
})

function createWindow() {
    window = new BrowserWindow({
        width: 785,
        height: 361,
        transparent: true,
        frame: false
    })

    window.loadFile('static/index.html')
}