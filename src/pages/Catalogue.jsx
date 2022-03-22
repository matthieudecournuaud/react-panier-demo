import React, { Component } from 'react';
import Produit from '../components/Produit/produit';

class Catalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <h1>Catalogue</h1>
                <section>
                    {
                        this.props.produits.map((produit) => {
                            return <Produit produit={produit} key={produit.id} />
                        })
                    }
                </section>
            </>
        );
    }
}
export default Catalogue;
