const exp = require('express')
const setup = require('./setup')

module.exports = {
  name: 'sools-modeling-router',
  dependencies: ['sools-core', 'express', 'sools-modeling'],
  async construct({ core, express, modeling }) {
    const router = new exp.Router()
    express.use('/api/collections', router)
    core.on('ready', () => setup({ modeling, router }))
  }
}