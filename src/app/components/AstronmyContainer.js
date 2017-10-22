import React, {Component} from 'react';
import AstronomyCard from './AstronomyCard';
import { connect} from 'react-redux';
import fetchData  from '../../actions/fetch_data'

class AstronmyContainer extends Component {
    render() {
        return (<AstronomyCard data = {astronmy}/>)
    }
    componentWillMount() {
        this.props.fetchData();
    }
}


// connect react with redux
// @params mapsStateToProps (necessity)
// @params maps to dispatch props (optional)

function mapStateToProps () {
    return {astronmy: state.astronmy}
}
export default connect (mapStateToProps, {fetchData})(AstronmyContainer);