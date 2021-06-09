import React , {Component} from 'react';
import { Link } from 'react-router-dom'

 class Prod extends Component {
  

    state = {
      nom: "",
      prixunitaire: "",
      qte: "",

     users : null,
      error: null
     
      
  };
    async componentDidMount() {
      try { const response  = await  fetch ('http://localhost:8080/v1/Produit')
     const  data = await  response.json() ;
     console.log(data)
     this.setState({ users: data })}
     catch (error) {
         console.log(error);
     }
     }
     
     handleOnchange = e => this.setState({ [e.target.name]: e.target.value });
     
     handleSignUp = event => {
         event.preventDefault()
     
         const { nom, prixunitaire, qte , users } = this.state;
         if (!nom.length || !qte.length || !prixunitaire.length) {
          this.setState({ error: "please fill out all the details" })
          return false;
      } else {
     
            users ? users.filter(user => {
             
           
        const json = JSON.stringify(user);
                  localStorage.setItem("currentuser", json);
                  this.props.history.push("/Prod");
                  window.sessionStorage.setItem("currentUser", json);
                  console.log(json)
                  window.location.reload();
                
            }
                ): this.setState({ error: "no user found" })
            
        ;  }}          
  
  
     render(){
    
    
    
    return (
         <div className="card card-footer">
                           <span>   <h1>Get all Produit</h1> <Link to="/Home">All Produit </Link></span>
                            </div>
                            

    );
     }
    }
export default Prod;