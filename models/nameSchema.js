import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const nameSchema = mongoose.model('name', userSchema);
export default nameSchema;
