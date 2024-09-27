import dotenv from 'dotenv'
import express from 'express';
import routes from './routes/routes.js';
import connectDb from './database/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT


connectDb();

app.set("view engine", "ejs");

// Usar caminho relativo para a pasta public
app.use(express.static('public'));
app.use(express.urlencoded())
app.use(routes)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
