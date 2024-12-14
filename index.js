const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
const userModel = require("./db")

//signin sign up route;

app.post("/signup", async (req, res) => {
    const { username, password, phoneNumber, email } = req.body;
    console.log("req.body->", req.body)
    try {
        const newUser = {
            username: username,
            password: password,
            phoneNumber: phoneNumber,
            email: email
        }

        const user = await userModel.create(newUser);
        console.log("user->", user)
        user.save();
        res.status(200).json({ message: "sign up endppoint" })
    }
    catch (e) {
        console.log('error occured', e)
        res.status(404).json({ message: "signup failed" })
    }

})
//signin endpoint without using bcrypt
app.get("/signin", async (req, res) => {
    //check whether both username and password matches for the user.
    const data = req.body;
    if (!data.username || !data.password) {
        return res.status(400).json({ message: "both username and pasword is required" });

    }
    let userExist;
    try {
        userExist = await userModel.findOne({ username: data.username, password: data.password });

    }
    catch (e) {
        return res.status(500).json({ message: "login failed.Please " })
    }

    if (userExist) {
        return res.status(200).json({ message: "login succesful" })
    }
    else {
        return res.status(400).json({ message: "invalid username or password." })
    }

})

app.listen(PORT, () => {
    console.log(` app is listening on the post ${3000}`)
})