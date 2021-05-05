import React from 'react';


class PokemonIndexItem extends React.Component {

    constructor (props) {
        super (props);

    }


    render () {
        return (
            <li>Image:{this.props.pokemon.imageUrl} Name:{this.props.pokemon.name}</li>
        )
    }

}

export default PokemonIndexItem;