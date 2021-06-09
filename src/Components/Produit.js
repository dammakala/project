import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Produit extends Component {
    constructor() {
        super()
        this.state = {
            nom: '',
            prixunitaire: '',
            Qte: '',
           
            error: null,
            users: [],
            loading: false
        };
    }
  
   
        // Simple POST request with a JSON body using fetch
   
       
   

    componentDidUpdate(prevState, preProps) {
        if (preProps.users.length !== this.state.users.length) {
            const json = JSON.stringify(this.state.users);
            localStorage.setItem("Produit", json);
        }
    }

    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });

    handleSignUp = event => {
        event.preventDefault()
        this.setState({ loading: true });
        const { nom,prixunitaire, Qte,} = this.state;
        if (!nom.length || !prixunitaire.length || !Qte.length) {
            this.setState({ error: "please fill out all the details", loading: false })
            return false;
        
        } else {
            const regesterData = {
                nom: nom,
                prixunitaire: prixunitaire,
                qte: Qte ,
               
                
            };
            fetch ('http://localhost:8080/v1/add/Product', {
                method  : 'POST',
                headers : {'Content-Type': 'application/json' } , 
                body : JSON.stringify(regesterData),
            }).then(()=>{console.log('good')})
            console.log({regesterData})

            this.setState({
                error: "",
                nom: "",
                prixunitaire: "",
                Qte: "",
                Produit: this.state.users.concat(regesterData)
            });
            setTimeout(() => {
                this.props.history.push("/")
                this.setState({ loading: false })
            }, 2000)
        }
    };


    render() {
        const { nom , prixunitaire, Qte,error, loading } = this.state;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="card card-body py-3 mb-3">
                                <div className="text-center mb-3"><i className="fa fa-user fa-2x text-primary"></i></div>
                                <h3 className="text-center mb-4">Add Product</h3>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form onSubmit={this.handleSignUp}>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="firstName">Nom Produit:</label>
                                                <input
                                                    id="firstName"
                                                    type="text"
                                                    autoFocus
                                                    className="form-control"
                                                    placeholder="Nom Produit"
                                                    name="nom"
                                                    onChange={this.handleOnchange}
                                                    value={nom}
                                                />

                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="lastName">prix unitaire:</label>
                                                <input
                                                    id="lastName"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="PrixUnitaire"
                                                    name="prixunitaire"
                                                    onChange={this.handleOnchange}
                                                    value={prixunitaire}
                                                />

                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="phoneNumber">Quantiter:</label>
                                                <input
                                                    id="phoneNumber"
                                                    type="text"                                                
                                                    className="form-control"
                                                    placeholder="Quantiter"
                                                    name="Qte"
                                                    onChange={this.handleOnchange}
                                                    value={Qte}
                                                />

                                            </div>
                                            
                                            <div className="text-center">
                                                <button disabled={loading} className="btn btn-primary btn-block">Save</button>
                                            </div>
                                        </form>
                                        {error && <p className="text-danger mt-3 mb-2 text-center">{error}</p>}
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <br />
                    <div className="card card-footer">
                                <span className="text-center small">Get all Produit <Link to="/Prod">All Produit </Link></span>
                            </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Produit;
