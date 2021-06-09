import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
  

  state = {
    user: "",
   
    error: ""
}

componentDidMount() {

    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
       
        this.setState({ user: user })
    }
   
console.log(user)
}
render() {

    const { user,  } = this.state
    return(
      <div>
    <ul> <li> <h1>{user.nom} </h1></li>
    <li>{user.qte}</li>
    <h1>{user.prixunitaire} </h1></ul>
    
    
    


  
 
           <div>
                               <span><h1>Add Product </h1><Link to="/Produit">Add Product </Link></span>
                          
       </div>
        
    </div>
    )
  }

  }