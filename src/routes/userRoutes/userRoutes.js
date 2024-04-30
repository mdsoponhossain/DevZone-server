// External Importings ;
const express = require('express');
const userRouter = express.Router();

// Internal Exportings ;
const userModel = require('../../models/documentModel/userModel/userModel');
const findAuser = require('../../controller/findAuser/findAuser');
const postAuser = require('../../controller/postAuser/postAuser');


// get a user :
userRouter.get('/user',findAuser);

// post a user :
userRouter.post('/user',postAuser);

module.exports = userRouter;