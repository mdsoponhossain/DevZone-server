//External Importings ;
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//Internal importings ;
const connectionDB = require('./connectionDB/connectionDB');
const documentRouter = require('./routes/documentRoutes/documentRoutes');
const globalErrorHandler = require('./globalErrorHandler/globalErrorHandler');
const userRouter = require('./routes/userRoutes/userRoutes');
const middlewares = require('./middlewares/middlewares');

// middleware function:
middlewares(app, express, cors)

// health checking route:
app.get('/health', (req, res) => {
    res.json({ message: 'server is okay...' })
});

// server routes
app.use('/docs', documentRouter);
app.use('/users', userRouter)

// Global ErrorHandler function ;
globalErrorHandler(app)

// Database connection ;
connectionDB();

// App Listener ;
app.listen(port, async () => {
    await console.log(`server is running on ${port}`)
})