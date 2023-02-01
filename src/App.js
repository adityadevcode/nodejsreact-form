import LoginForm from "./Components/LoginForm";


function App() {
  return (
    <div className="App">
     <p>Form submission backend</p>
     <LoginForm />
    </div>
  );
}

export default App;


// backend c0de
//  -This code sets up an Express.js server listening on port 3000 and listens
//  for a POST request to the /login endpoint. 
//  -When a request is received, it parses the request body to extract
//   the username and password fields, and returns a JSON response with
//    a success field set to true.

// -You can now use your frontend code to send a POST request to the
//  /login endpoint with a username and password in the request body.
//   The response from the server will be the { success: true } JSON object.


// const express = require('express');
// const app = express();
// const cors =require('cors');
// const port=3000;

// app.use(express.json());

// app.use(cors({
//       origin:'*'
//   }))

// app.post('/login', (req, res) => {
//     const {username, password} = req.body;
//      // Check if the username and password match
//   // ...
//   // Store the details in a database or memory
//   // ...
//   res.json({ success: true });
// })

// app.listen(port, ()=> {
//     console.log(`Server running at http://localhost:${port}`);
// });