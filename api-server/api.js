const express = require("express");
const api = express();
const port = process.env.PORT || 8080;
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);
const cors = require("cors");

api.use(express.json());
api.use(cors());

api.get("/", function (req, res) {
    res.send("DATABASE ONLINE");
  });


api.get("/user/:id", (req, res) => {
    knex("user_account").select('*').where({id: req.params.id})
    .then(dbRes => {
        res.status(200).json(dbRes[0]);
    })
})

api.get("/user/:id/items", (req, res) => {
    knex("item").select("*").where({user_id: req.params.id})
    .then(dbRes => {
        res.status(200).json(dbRes);
    })
})

api.get("/items", (req, res) => {
    knex("item").select("*")
    .then(dbRes => res.status(200).json(dbRes));
})

api.get("/items/:id", (req, res) => {
    knex("item").select("*").where({id: req.params.id})
    .then(dbRes => res.status(200).json(dbRes[0]));
})

/*
    {
        id: 4
    }
*/
api.delete("/items", (req, res) => {
    const {id} = req.body;
    knex("item").where({id: id}).del()
    .then(dbRes => res.status(200).json({status: "Succesfully Deleted"}));
})


/*
    {
        "item_name": "Cheesy Bread",
        "description": "Because I like Cheesy bread. DUH!",
        "quantity": 2147483647
    }
*/
api.patch("/items/:id", (req, res) => {
    const {item_name, description, quantity} = req.body
    knex("item").where({id: req.params.id}).update({item_name, description, quantity})
    .then(dbRes => {
        console.log(dbRes);
        res.status(200).json(dbRes[0]);
    });
})


/*
  {
    "first": "Joey",
    "last": "Kanga",
    "username": "knockUout",
    "password": "mamasjoey"
  }
*/
api.post("/auth/signup", (req, res) => {
    try {
        const {first, last, username, password} = req.body;
        knex("user_account").insert({first_name: first, last_name: last, username: username, password: password})
        .then(res.status(201).json({status: "Authenticated"}))
        .catch(err => res.status(500));
    } catch (err) {
        res.status(400).json({error: err})
    }
})

/*
  {
    "username": "knockUout",
    "password": "mamasjoey"
  }
*/
api.post("/auth/signin", (req, res) => {
    const {username, password} = req.body;
    knex("user_account").select("*").where({username: username})
    .then((dbRes) => {
        try {
            if (dbRes[0].password === password) {
                res.status(201).json({status: "Authenticated", userData: dbRes[0]})
            } else {
                res.status(400).json({status: "Password did not match"});
            }
        } catch {
            res.status(400).json({status: "Bad Request"});
        }
    })
})

/*
    {
        "username": "johndoe123",
        "item_name": "Yeti Cooler",
        "description": "Made for the road and ready to go – The Roadie® 24 Hard Cooler packs more while taking up less space.",
        "quantity": 343
    }
*/
api.post("/items", (req, res) => {
    const {username, item_name, description, quantity} = req.body;
    knex("user_account").select("*").where({username: username})
    .then(dbRes => {
        knex("item").insert({user_id: dbRes[0].id, item_name: item_name, description: description, quantity: quantity})
        .then(res.status(201).json({status: "Succesfully created Item"}));
    })
})

api.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);