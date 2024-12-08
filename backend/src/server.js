const app = require('./app');
const port = 3000;

app.listen(port, () => {
    console.log(`Profile API listening at http://localhost:${port}`);
});
