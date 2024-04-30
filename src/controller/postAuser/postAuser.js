async function postAuser(req, res) {
    try {
        // console.log(req.body);
        const userInfo = req.body;
        const result = await userModel(userInfo).save();
        res.send({ message: 'success' })
    } catch (error) {
        res.json({ Message: error?.message })
    }
};

module.exports = postAuser;