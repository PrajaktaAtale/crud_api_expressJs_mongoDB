const express = require("express");
const Employee = require("../models/Employee");

// for using the multiple routes
const router = express.Router();

//  Route 1: Get all the employee details using : GET "/api/hit/getemployeedetails"
router.get("/getemployeedetails", (req, res) => {
  try {
    Employee.find().then((data) => {
      res.status(200).json({ data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 2: Add a new employee detail using : POST "/api/hit/createemployeedetails"
router.post("/createemployeedetails", (req, res) => {
  try {
    const employee = new Employee({
      fullName: req.body.fullName,
      age: req.body.age,
      address: req.body.address,
      place: req.body.place,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zipcode: req.body.zipcode,
      phone: req.body.phone,
    });

    employee.save().then((data) => {
      res.json({ message: "Success", data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 3: Update an existing employee detail using : PUT "/api/hit/editemployeedetails/:id"
router.put("/editemployeedetails/:id", (req, res) => {
  const {
    fullName,
    age,
    address,
    place,
    city,
    state,
    country,
    zipcode,
    phone,
  } = req.body;
  try {
    const newEmployee = {};
    if (fullName) {
      newEmployee.fullName = fullName;
    }
    if (age) {
      newEmployee.age = age;
    }
    if (address) {
      newEmployee.address = address;
    }
    if (place) {
      newEmployee.place = place;
    }
    if (city) {
      newEmployee.city = city;
    }
    if (state) {
      newEmployee.state = state;
    }
    if (country) {
      newEmployee.country = country;
    }
    if (zipcode) {
      newEmployee.zipcode = zipcode;
    }
    if (phone) {
      newEmployee.phone = phone;
    }
    Employee.findByIdAndUpdate(
      req.params.id,
      { $set: newEmployee },
      { new: true }
    ).then((data) => {
      res.status(200).json({ data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// Route 4: Delete an existing employee detail using : DELETE "/api/hit/deleteemployeedetails/:id" 
router.delete("/deleteemployeedetails/:id", (req, res) => {
  try {
    Employee.findByIdAndDelete(req.params.id).then((data) => {
      res
        .status(200)
        .json({ massage: "Employee detail has been deleted", data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
