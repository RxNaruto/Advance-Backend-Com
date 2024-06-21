import express from 'express';
import swagggerUi from "swagger-ui-express";
import { openapispec } from './openapispec';

const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

app.get('/users', (req, res) => {
   
    const { name } = req.query;
   
    if (name) {
         //@ts-ignore
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    } else {
        res.json(users);
    }
});
app.use('/documentation',swagggerUi.serve,swagggerUi.setup(openapispec));
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});