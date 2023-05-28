const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// logger middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware function
  };
  

const authenticateMiddleware = (req, res, next) => {
    // Perform authentication logic
      let isLalit = req.body.email == "laalit.sunnar@gmail.com"
    if (isLalit) {
      next(); // User is authenticated, pass control to the next middleware
    } else {
      res.status(401).send('Unauthorized'); // User is not authenticated
    }
  };
  

app.post('/users', authenticateMiddleware,(req, res)=>{
    const {username, email} = req.body;
    if(username=="lalit"){
      return res.send(`Hello mr.${username}`)
    }
  res.status(500).json({message:"Not lalit"})
})

app.use(loggerMiddleware);


app.post('/test', authenticateMiddleware,(req, res)=>{
  const {username, email} = req.body;
  if(username=="lalit"){
    return res.send(`Hello mr.${username}`)
  }
  res.status(500).json({message:"Not lalit"})
})

const errorMiddleware = (err, req, res, next) => {
    console.log("testing")
    // Handle the error and send an appropriate response
    res.status(500).send('Internal Server Error for imepay server');
  };
  
app.use(errorMiddleware);
  

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
