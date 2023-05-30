const express = require('express');
const router = express.Router();
const createusercontroller = require('../controlls/insert-user-controlles')
const ListUsersController = require("../controlls/listusers.controller")
const alterUserController = require("../controlls/alterUserControlle")
const insertCli  = require("../controlls/insert-admin-controlls");
const insertAdminControlls = require('../controlls/insert-admin-controlls');


router.post("/User",createusercontroller.createuser);

router.get("/User",ListUsersController.listarUsuarios);




router.post("/admin",insertAdminControlls.alterClie);

module.exports = router;