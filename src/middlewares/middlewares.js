function middlewares(app, express, cors) {
    app.use(express.json());
    app.use(cors({ origin: ['http://localhost:5173', 'https://devzone-c08e3.web.app', 'https://developer-zone-e0186.web.app',] }));
};

module.exports = middlewares;