import React from 'react';
import { Link, Route } from 'react-router-dom';


class PokemonIndexItem extends React.Component {

    constructor (props) {
        super (props);

    }


    render () {

        return (
            <Link to={`/pokemon/${this.props.pokeid}`}>
                <li className="pokemon-index-item" >
                    <img src={this.props.imageUrl} />
                    <span>{this.props.name}</span>
                    </li>
            </Link>
        )
    }

}

export default PokemonIndexItem;