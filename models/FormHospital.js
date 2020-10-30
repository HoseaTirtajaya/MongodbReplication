const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, "Nama harus diisi"]
    },
    jenis_kelamin: {
        type: String,
        required:[true, "Jenis Kelamin harus diisi"]
    }, 
    umur: {
        type: Number,
        required: [true, "Umur harus diisi"]
    }, 
    alamat: {
        type: String,
        required: [true, "Alamat harus diisi"]
    }
},
{
    versionKey: false,
    timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"}
});

const FormHospital = mongoose.model("FormHospital", Schema);
module.exports = FormHospital;