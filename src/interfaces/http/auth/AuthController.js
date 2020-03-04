/* eslint-disable */

const { Router } = require('express');
// const { inject } = require('awilix-express');
const Status = require('http-status');

let storage = {}

const AuthController = {
  get router() {
    const router = Router();

    router.get('/', this.index)
    router.post('/', this.add);
    router.get('/:name', this.check);
    router.delete('/:name', this.delete);

    return router;
  },

  index(req, res, next) {
    res.status(Status.OK).json(storage);
  },

  check(req, res, next) {
    name = req.params.name;

    if (storage[name]) {
      res.status(Status.OK).json({});
    } else {
      res.status(Status.NOT_FOUND).json({});
    }
  },

  add(req, res, next) {
    data = req.body;
    
    if (storage[data.name]) {
      res.status(Status.BAD_REQUEST).json({})
    } else {
      storage[data.name] = data;
      res.status(Status.OK).json(storage[data.name])
    }
  },

  delete(req, res, next) {
    name = req.params.name;

    if (!storage[name]) {
      res.status(Status.NOT_FOUND).json({})
    } else {
      delete storage[name]
      res.status(Status.OK).json({})
    }
  }
}

module.exports = AuthController
