首先安装好官网上的Angular Quickstart工程：[点我链接](https://angular.io/docs/ts/latest/guide/setup.html)  
Configuration Instruction:

1.修改package.json
添加以下，声明electron入口文件：  
`"main": "main.js",`

```json
"devDependencies": {
    // other dependencies
    "electron": "1.6.2",
},
```
修改以下，修改后start指令在项目启动时同时打开浏览器和electron桌面程序：  
```
"scripts": {
  "start": "concurrently \"npm run build:watch\" \"npm run serve\" \"electron .\"",
},
```

2.添加main.js
```JavaScript
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

```

3.修改main.js  
修改load the index.html of the app路径为：
```JavaScript
pathname: path.join(__dirname, 'src/index.html'),
```

4.修改src/index.html  
修改base标签，electron根据默认的`<base href="/">`将项目文件系统根路径设置为项目所在盘的根目录，修改为如下：  
`<base href="./">`

相应的修改引用文件路径：
```JavaScript
<script src="node_modules/core-js/client/shim.min.js"></script>

<script src="node_modules/zone.js/dist/zone.js"></script>
<script src="node_modules/systemjs/dist/system.src.js"></script>
```
为
```JavaScript
<script src="../node_modules/core-js/client/shim.min.js"></script>

<script src="../node_modules/zone.js/dist/zone.js"></script>
<script src="../node_modules/systemjs/dist/system.src.js"></script>
```
