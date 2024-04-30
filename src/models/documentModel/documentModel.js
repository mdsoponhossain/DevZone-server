const mongoose = require('mongoose');
const documentSchema = require('../../schemas/documentSchema/documentSchema');

const documentModel = new mongoose.model('DocumentCollection', documentSchema);
module.exports = documentModel;