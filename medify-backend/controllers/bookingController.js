const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = req.body;
    // const formattedBooking = {
    //   providerId: data["Provider ID"],
    //   hospitalName: data["Hospital Name"],
    //   address: data["Address"],
    //   city: data["City"],
    //   state: data["State"],
    //   zipCode: data["ZIP Code"],
    //   countyName: data["County Name"],
    //   phoneNumber: data["Phone Number"],
    //   hospitalType: data["Hospital Type"],
    //   hospitalOwnership: data["Hospital Ownership"],
    //   emergencyServices: data["Emergency Services"], // Fix key name
    //   ehrCriteriaMet: data["Meets criteria for meaningful use of EHRs"],
    //   overallRating: data["Hospital overall rating"],
    //   mortalityComparison: data["Mortality national comparison"],
    //   safetyComparison: data["Safety of care national comparison"],
    //   readmissionComparison: data["Readmission national comparison"],
    //   patientExperienceComparison:
    //     data["Patient experience national comparison"],
    //   effectivenessComparison:
    //     data["Effectiveness of care national comparison"],
    //   timelinessComparison: data["Timeliness of care national comparison"],
    //   efficiencyComparison:
    //     data["Efficient use of medical imaging national comparison"],
    //   bookingDate: data["bookingDate"],
    //   bookingTime: data["bookingTime"],
    //   bookingEmail: data["bookingEmail"],
    // };
    const newBooking = new Booking({ ...data, userId });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

const getBookings = async (req, res) => {
  const userId = req.user.id;
  try {
    const bookings = await Booking.find({ userId });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

module.exports = { createBooking, getBookings };
