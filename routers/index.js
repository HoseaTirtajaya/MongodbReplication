const express = require("express");
const Router = express.Router();

const FormHospital = require("../models/FormHospital");

Router.get("/allforms", (req, res, next) => {
    FormHospital.find({}).then((data) => {
        res.status(200).json({data});
    }).catch(next);
});

Router.post("/form/", (req, res, next) => {
    let {
        nama,
        jenis_kelamin,
        umur,
        alamat
    } = req.body;

    FormHospital.create({nama, jenis_kelamin, umur, alamat}).then((item) => {
        res.status(200).json({item});
    }).catch(next)
});

module.exports = Router;