const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled', 'completed'],
    default: 'pending'
  },
  documentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document',
    // required: true
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
