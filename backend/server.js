//  In terminal run: "npm install express mongoose body-parser cors bcrypt nodemon" to install necessary packages before running
//  Run code: "nodemon server.js" (so code runs continuously and updates with file changes"
//  TODO: This works so long as this program remains running on a computer, need to transition to a service (like AWS/Azure for a more permanent running server - outside of terminal)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.time('request');
    res.on('finish', () => {
      console.timeEnd('request');
    });
    next();
  });

// MongoDB connection - feel free to pass it your connection String
const uri = "mongodb+srv://groot:WE_will_Get_100.@main-cluster.qga3zp6.mongodb.net/?retryWrites=true&w=majority&appName=Main-Cluster";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema - we may need different Schemas for each action since they query different stuff (one for login, one for signup, one for workouts, etc...)
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', UserSchema);

// Routes

//  Register
//  /register works, just upgraded to add hashed password
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const newUser = new User({ username, password });
//     await newUser.save();
//     res.status(201).send('User registered successfully.');
//     console.log('User registered successfully!')
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.log('Unsuccessful attempt.')
//   }
// });

//  Register a user with a hashed password
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save(); //  I think this saves it into the database, maybe
      res.status(201).send('User registered successfully.');
      console.log('User registered successfully!');
    } catch (error) {
      res.status(500).send(error.message);
      console.log('Unsuccessful attempt.');
    }
  });


  // Login a user
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).send('User not found.');
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).send('Invalid credentials.');
      }
  
      res.send('Login successful.');
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occurred during the login process.');
    }
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
