// import React from 'react';
// import List from './List';


// function App() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 mx-auto">
//           <h1 className="text-center">Todo list App</h1>
//           <List/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import List from './List'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/List" component={List} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App