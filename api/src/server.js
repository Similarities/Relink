import express from "express";
import db from "./models/index";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_, res) => {
    res.json({ 'message': 'welcome to the relink api' })
});

app.get('/users', async (_, res) => {
    const users = await db.User.findAll();
    res.json({ 'users': users });
})

db.sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    });
