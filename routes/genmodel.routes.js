const genroute = require("express").Router();

genroute.get("/api/clientresp", getclientrespcontroller);
genroute.post("/api/clientquery", postquerycontroller);
