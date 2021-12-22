import logo from './logo.svg';
import './App.css';
/* Example 1, props, passing like parameters, html attribute syntax
const App = () => {
  let userDetails = {
    name: "Jimmy B",
    userId: 7348,
    email: "jimmy@pursuit.org"
  }
  return <User name={userDetails.name} />
}

const User = (props) => {
  const { name } = props
  return (
    <div className="user-details">
      <h1>{name}</h1>
    </div>
  )
}
*/

const App = () => {
  let userDetails = {
    name: "Jimmy B",
    userId: 7348,
    email: "jimmy@pursuit.org"
  }

  return <User name={userDetails.name} userId={userDetails.userId} />
}

const User = (props) => {
  const { name, userId } = props
  return (
    <div className="user-details">
      <h1>{name}</h1>
      <h1>{userId}</h1>
    </div>
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
