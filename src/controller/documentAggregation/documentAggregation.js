const documentModel = require("../../models/documentModel/documentModel");

async function documentAggregation(req, res) {
    try {
        const result = await documentModel.aggregate([
            {
                $group: {
                    // _id: "$category",
                    // _id: { $toUpper: "$category" },
                    _id: {
                        $concat: [
                            { $toUpper: { $substrCP: ["$category", 0, 1] } },
                            { $toLower: { $substrCP: ["$category", 1, { $subtract: [{ $strLenCP: "$category" }, 1] }] } }
                        ]
                    },

                    documents: {
                        $push: "$$ROOT"
                    }
                }
            },
            {
                $project: {
                    category: '$_id',
                    _id: 0,
                    documents: 1,

                }
            }
        ]);
        const foundedData = result.filter(item => item?.category?.toLowerCase() === req?.query?.searchText?.toLowerCase());
        if (foundedData.length !== 0) {
            res.send(foundedData);
        }
        if (foundedData.length == 0 || foundedData.length < 0) {
            res.send(result);
        }
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = documentAggregation;