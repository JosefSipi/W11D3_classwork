import React from 'react';


class PokemonIndexItem extends React.Component {

    constructor (props) {
        super (props);

    }


    render () {
        return (
            <li>{this.props.pok}</li>
        )
    }

}

export default PokemonIndexItem;