const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    tag: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    codeOne: {
        type: String
    },
    overview: {
        type: String
    },
    codeTwo: {
        type: String
    },
    note: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },

},
    { versionKey: false }
);

documentSchema.query.bySearchText = function (searchText) {
    // console.log('this is from the schema and search text is:', searchText)
    return this.where({ tag: new RegExp(searchText, 'i') })
}

module.exports = documentSchema;