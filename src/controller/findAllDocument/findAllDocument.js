// internal exports ;
const documentModel = require("../../models/documentModel/documentModel");

async function findAllDocument(req, res) {
    try {
        const totalBlog = await documentModel.estimatedDocumentCount();
        // console.log(totalBlog,': the total blogs')
        const blogPerPage = 5;
        // console.log(typeof (parseFloat(req.query.pageNumber)), req.query.pageNumber, 'That is the page number')
        const result = await documentModel.find().bySearchText(req.query.searchText).limit(blogPerPage).skip(blogPerPage * parseFloat(req?.query?.pageNumber));
        res.send({ result, totalBlog })
    } catch (error) {
        res.send(error.message)
    }
};

module.exports = findAllDocument;