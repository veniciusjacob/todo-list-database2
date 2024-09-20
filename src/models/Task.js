import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task : {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()

    }
  });

  const taskModel = mongoose.model('task', taskSchema);

export default taskModel
  