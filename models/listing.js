const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Importing mongoose module and Schema.
const Review = require("./review.js");
const { required } = require("joi");

/* Schema defining */
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
    
    
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      
      type : Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum:['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
 
});
listingSchema.post("findOneAndDelete", async (listing) =>{
  if(listing){
    await Review.deleteMany({_id: {$in : listing.reviews}});
  }
  
});
/* Model creating and exporting */
const Listing = mongoose.model("Listing", listingSchema); // Creating a model from the schema.
module.exports = Listing; // Exporting the model for use in other parts of the application.