import express from "express";

const router = express.Router();

const users = [
    {
        firstName : "Abdur",
        lastName  : "Rahman",
        age       : 25
    }
]

router.get('/', (req, res) => {

    res.send(users);

});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`User: ${user.firstName} ${user.lastName} is added to db!`);
});


export default router;