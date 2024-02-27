import mongoose from "mongoose";
import moment from "moment";

const incomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "income",
    },

    date: {
      type: Date,
      default: () => moment().tz("Asia/Kolkata").format(), // Set default value to current date
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 20,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Income", incomeSchema);
