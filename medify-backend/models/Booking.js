const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    providerId: { type: String, required: false },
    hospitalName: { type: String, required: false },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zipCode: { type: Number, required: false },
    countyName: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    hospitalType: { type: String, required: false },
    hospitalOwnership: { type: String, required: false },
    emergencyServices: { type: String, enum: ["Yes", "No"], required: false },
    ehrCriteriaMet: { type: String, enum: ["Y", "N"] },
    overallRating: { type: Number, required: false },
    mortalityComparison: { type: String, required: false },
    safetyComparison: { type: String, required: false },
    readmissionComparison: { type: String, required: false },
    patientExperienceComparison: { type: String, required: false },
    effectivenessComparison: { type: String, required: false },
    timelinessComparison: { type: String, required: false },
    efficiencyComparison: { type: String, required: false },
    bookingDate: { type: Date, required: false },
    bookingTime: { type: String, required: false },
    bookingEmail: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Booking", BookingSchema);
