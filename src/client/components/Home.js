import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {}
  
  //sets state of this component property to the name of the input field and grabs value of input field
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  //passing local state of this component to redux store through the getProducts action
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getProducts(this.state.zip)
  }
// https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2009/06/03145943/farmers-markets.jpg
//'https://southsoundmag.com/wp-content/uploads/2019/06/Photo-by-Daria-Shevtsova-via-Pexels-e1559759504402-1024x507.jpg'
//'https://render.fineartamerica.com/images/rendered/default/canvas-print/12/6.5/mirror/break/images-medium/farmers-market-nancy-pahl-canvas-print.jpg' 
  render() {
    return(
      <div style={styles.container}>
        <nav style={styles.nav}></nav>
        <div style={styles.hero}>
        <div style={styles.callToAction}>
        <h1 style={styles.header}>Welcome to neighbors table!</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} style={styles.form}>
          <input type="text" name='zip'/>
          <button type="submit">Submit</button>
        </form>
        <Link to="/products">Remove me!</Link>
        </div>

        </div>
        
      </div>
    )
  }
}

export default Home;

const styles = {
  header: {
    color:'green'
  },
  hero:{
    backgroundImage: 'url(' + 'https:southsoundmag.com/wp-content/uploads/2019/06/Photo-by-Daria-Shevtsova-via-Pexels-e1559759504402-1024x507.jpg' + ')',
    height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems:'center',
},
callToAction:{
  background: 'black',
  opacity :'.7',
  // width: '100%',
  // height:'100%',
  position:'absolute',
}
}
