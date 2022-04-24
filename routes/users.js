import express from "express";

const router = express.Router();

const users = [
    {
        firstName : "Md",
        lastName  : "Musa",
        age       : 28
    },
    {
        firstName : "Abdur",
        lastName  : "Rahman",
        age       : 25
    }
]

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);

});


export default router;