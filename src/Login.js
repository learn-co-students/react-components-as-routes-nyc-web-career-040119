import React from 'react'

class Login extends React.Component {
  render() {
    return(
      <div>
        <form>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
            />
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="submit"
            value="Login"
          />
        </form>
      </div>
    )
  }
}

export default Login
