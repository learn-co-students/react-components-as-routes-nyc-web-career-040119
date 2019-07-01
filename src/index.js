import React from 'react';
import ReactDOM from 'react-dom';
//step 1. import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Login'
import About from './About'
import Home from './Home'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
//
// //step 3. add components for about and login
// const About = () => {
//   return(
//     <div>
//       <h1>This is my about component</h1>
//     </div>
//   )
// }

// const Login = () => {
//   return(
//     <div>
//       <form>
//         <div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//           />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input
//           type="submit"
//           value="Login"
//         />
//       </form>
//     </div>
//   )
// }

// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );

// //step 2. changed to have router coordinate what is displayed
// ReactDOM.render((
//   <Router>
//     <Route path="/" render={Home} />
//   </Router>),
//   document.getElementById('root')
// )

// //step 4. add /about and /login routes to router
// ReactDOM.render((
//   <Router>
//     <Route path="/" render={Home} />
//     <Route exact path ="/about" render={About} />
//     <Route exact path="/login" render={Login} />
//   </Router>),
//   document.getElementById('root')
// )

//step 5. place Route components into a div tag or a fragment
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
)
