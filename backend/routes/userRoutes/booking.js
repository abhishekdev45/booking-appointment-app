const router = require("express").Router();
const User = require("../../models/user");
const Appointment = require("../../models/appointment")
const Document = require("../../models/document")
const {
    verifyToken
  } = require("./verifyToken");

router.post('/booking',verifyToken, async (req, res) => {
    try {
      const userId = req.user.id; 
  
      const { date, time, department, description } = req.body;
  
      const newBooking = new Appointment({
        date,
        time,
        department,
        description,
      });
  
      const savedBooking = await newBooking.save();
  
      const newDocument = new Document({
        userId,
        paths: [],
      });
  
      if (req.files && req.files.file) {
        const file = req.files.file;
        const uploadPath = path.join(__dirname, 'uploads', file.name);
  
        await file.mv(uploadPath);
  
        newDocument.paths.push(file.name);
      }
  
      const savedDocument = await newDocument.save();

      await Appointment.findByIdAndUpdate(
        savedBooking._id,
        { $set: { documentId: savedDocument._id } },
        { new: true }
      );
  
      res.status(201).json(savedBooking);
    } catch (error) {
      console.error('Error saving user data:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  




module.exports = router;