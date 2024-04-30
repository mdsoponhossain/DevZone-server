const userModel = require("../../models/documentModel/userModel/userModel");

async function findAuser(req, res) {
    try {
        // console.log(req.query.email);
        const result = await userModel.findOne({ email: req?.query.email });
        // console.log(123,result)
        res.send(result)
    } catch (error) {
        res.json({ Message: error?.message })
    }
};

module.exports = findAuser ;