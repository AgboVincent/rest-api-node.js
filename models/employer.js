const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//create employer Schema & model
const EmployerSchema = new Schema({
  name: {
    type:String,
    required:[true, 'Name field is requierd']
  },
  level:{
    type:String
  },
  available:{
    type:Boolean,
    default:false
  },
  admin:{
    type:Boolean,
    default:false
  },
  objective:{
    type:String
  },
  keyResult:{
    type:String
  },
  member:{
    type:String,
    required:[true, 'Name field is requierd']
  }



});

const Employer = mongoose.model('employer',EmployerSchema);
module.exports=Employer;
