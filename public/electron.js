const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require("path")
const isDev = require("electron-is-dev")
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1350, height: 820, maxWidth: 1350, maxHeight: 820, minWidth: 1350, minHeight: 820 });
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)
  mainWindow.on("closed", () => (mainWindow = null))
}

app.on("ready", createWindow)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow()
  }
})
