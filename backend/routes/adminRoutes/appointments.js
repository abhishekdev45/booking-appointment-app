const router = require("express").Router();

const Appointment = require("../../models/appointment");
const Document = require('../../models/document');
//CREATE

router.get('/appointments', async (req, res) => {
  try {
    // Retrieve appointments with status other than 'completed' and sort by date
    const appointments = await Appointment.find({ status: { $ne: 'completed' } })
      .sort({ date: 1 })
      .exec();

    // Extract document paths for each appointment
    const appointmentsWithPaths = await Promise.all(
      appointments.map(async (appointment) => {
        const document = await Document.findById(appointment.documentId).exec();
        return {
          ...appointment.toObject(),
          documentPathArray: document ? document.paths : []
        };
      })
    );

    // Send the result to the frontend in JSON format
    res.json(appointmentsWithPaths);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other routes and middleware as needed



module.exports = router;