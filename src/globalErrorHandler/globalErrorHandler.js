function globalErrorHandler(app) {
    try {
        //globar error handler:
        app.all("*", (req, res, next) => {
            try {
                if (req) {
                    const error = new Error(`Your requrested URL [${req.url}] invaild...`);
                    next(error)
                }

            } catch (error) {
                next(error)
            }
        });

        // last middleware:
        app.use((error, req, res, next) => {
            if (error) {
                res.status(500).json({ message: error.message })
            }
        })
    } catch (error) {
        console.log(error)
    }
};

module.exports = globalErrorHandler;