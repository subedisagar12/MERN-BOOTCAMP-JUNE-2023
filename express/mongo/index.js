const mongoose = require("mongoose");
const User = require("./models/UserModel");

mongoose
  .connect("mongodb://localhost:27017/helloworld")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(e.message);
    // console.log("Failed to connect");
  });

function createUser() {
  User.create({
    name: "My User",
    email: "MYuser@GMAIL.com",
  });
}

function getUsers() {
  User.find({
    age: 15,
    name: "My User",
  })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.log("Error Occured");
    });
}

function getSingleUser() {
  // User.findOne({name:"Sures"})
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(() => {
  //     console.log("Failed to fetch");
  //   });
  User.findById("64d64065ae5beb58d069ce12")
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.log("Failed to fetch");
    });
}

function updateUser() {
  // User.findOneAndUpdate(
  //   {
  //     _id: "64d6403ed1253ae325b2ac20",
  //   },
  //   {
  //     name: "Updated Ramesh",
  //   }
  // )
  //   .then(() => {
  //     console.log("Updated Successfully");
  //   })
  //   .catch(() => {
  //     console.log("Failed to update");
  //   });

  User.findByIdAndUpdate("64d64065ae5beb58d069ce12", {
    name: "Suresh Updated",
    age: 52,
  })
    .then(() => {
      console.log("Updated Successfully");
    })
    .catch(() => {
      console.log("Failed to update");
    });
}

function deleteUser() {
  // User.findOneAndDelete({ name: "John" })
  //   .then(() => {
  //     console.log("User has been deleted");
  //   })
  //   .catch(() => {
  //     console.log("Failed to delete user");
  //   });

  User.findByIdAndDelete("64d6458a7789941999eb0823")
    .then(() => {
      console.log("User has been deleted");
    })
    .catch(() => {
      console.log("Failed to delete user");
    });
}

// createUser();

// getUsers();
// getSingleUser();
// updateUser();

deleteUser();
