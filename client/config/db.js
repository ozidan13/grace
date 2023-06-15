import { connect } from "mongoose";
async function connectDB(app, port) {
  connect(process.env.Mongo_URI)
    .then(() => {
      console.log("connected to db...");
      app.listen(port, () => {
        console.log(`running on port ${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connectDB;
