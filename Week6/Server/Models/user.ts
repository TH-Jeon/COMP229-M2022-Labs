//Step 1 - Import Mongoose
import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema;     //alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';

//Step 2 - Create Schema that matches the data (media db -> movies collections)
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:
    {
        type: Date,
        default: Date.now()
    },
    Updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

//Step 3 - plugin the passport local mongoose module
UserSchema.plugin(passportLocalMongoose);
)  
//Step 4 - Create a Model using the Schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

//Step 5 - Export the Model -> this makes the file a module
export default Model;