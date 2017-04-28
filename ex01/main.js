//4월 13일 목요일 -응용//

const {app, BrowserWindow} = require('electron')
const path = require('path')

const url = require('url')  //'url'은 모듈

let win  //값을 나중에 넣을거라 let

app.on('ready', createWindow)


function createWindow() {
 win = new BrowserWindow({width: 800, height: 600})
  //


  win.loadURL(url.format({
    protocol: 'file:',
    pathname: path.join(__dirname, 'index.html'),
    slashes: true  //flase하면 /가 2개 붙어서 나옴
  }))
  //win.webContents.openDevTools()

}
