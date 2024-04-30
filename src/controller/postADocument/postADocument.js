const documentModel = require("../../models/documentModel/documentModel");

async function postADocument(req, res) {
    try {
        const doc = req.body;
        // console.log(doc);
        const result = await documentModel(doc).save();
        // console.log(result)
        res.send({ message: 'success' })
    } catch (error) {
        console.log(error.message)
    }
};

module.exports = postADocument;