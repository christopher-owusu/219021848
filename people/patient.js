const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Number, required: true },
    contact_number: Number,
    residential_address: String,
    emergency_contact_number: Number
});

const patient = mongoose.model('patient', patientSchema);

module.exports = patient;