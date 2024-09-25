import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  address: { type: String, required: true },
  userId: {type: String, ref: Schema.Types.ObjectId, required: true}
});

const addressSchema = mongoose.model('address', userSchema);
export default addressSchema;
