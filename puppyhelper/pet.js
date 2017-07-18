// Dependency
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PetSchema = new Schema({
  petname: {
    type: String,
    trim: true,
    required: "petname is Required"
  },
  petage: {
    type: String,
    trim: true,
    required: "Pet Age is Required",
    validate: [
      function(input) {
        return input.length <= 2;
      },
      "Age not valid."
    ]
  },
    petimage: {
    type: String,
    trim: true
  },
   walk: {
    type: Boolean,
    default: false
  },
  playtime: {
    type: Boolean,
    default: false
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

var Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;