// External Exportings ;
const express = require('express');
const documentRouter = express.Router();

// Internal Exportings ;
const documentModel = require('../../models/documentModel/documentModel');
const { alias } = require('../../schemas/documentSchema/documentSchema');
const findAllDocument = require('../../controller/findAllDocument/findAllDocument');
const documentAggregation = require('../../controller/documentAggregation/documentAggregation');
const findADocument = require('../../controller/findADocument/findADocument');
const postADocument = require('../../controller/postADocument/postADocument');

// finding all document: 
documentRouter.get('/all', findAllDocument);

//  aggregating all documents of a collection of mongodb on the basis of category
//  or other field of document ;
documentRouter.get('/aggregation/docs', documentAggregation);






// find a document:
documentRouter.get('/blog/:id',findADocument )


// post a document:
documentRouter.post('/doc/upload',postADocument);

module.exports = documentRouter;