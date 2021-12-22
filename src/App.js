import './App.css';
import ProductPage from './ProductPage';
/* 
//Example 1, props, passing like parameters, html attribute syntax

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

/*
// Example2, multiple props

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
*/

function App() {
  return (
    <div>
      < ProductPage />
    </div>
  )
}

export default App