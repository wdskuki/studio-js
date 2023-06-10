const path = require('path')
const express = require('express')
const mime = require('mime')
const webpack = require('webpack')
const config = require('./webpack.config')

const compiler = webpack(config)

class Server {
  constructor(compiler) {
    this.compiler = compiler
    let sockets = []
    let lasthash = null
    compiler.hooks.done.tap('webpack-dev-server', stats => {
      lasthash = stats.hash
      sockets.forEach(socket => {
        socket.emit('hash', stats.hash)
        socket.emit('ok')
      })
    })
  }
}

let server = new Server(compiler)
server.listen(10086)