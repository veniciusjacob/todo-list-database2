import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes.js';
import connectDb from './database/db.js';

dotenv.config();

const app = express();
const PORT = 8081;


connectDb();

app.set("view engine", "ejs");

// Usar caminho relativo para a pasta public
app.use(express.static('public'));
app.use(express.urlencoded())
app.use(routes)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
