import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return(
      <div>
        <h1>Get Local!</h1>
        <form>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
        <Link to="/products">Remove me!</Link>
      </div>
    )
  }
}

export default Home;
