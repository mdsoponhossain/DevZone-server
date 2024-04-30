const documentModel = require("../../models/documentModel/documentModel");

async function findADocument(req, res) {
    try {
        const result = await documentModel.findOne({ _id: req?.params?.id });
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
};

module.exports = findADocument ;