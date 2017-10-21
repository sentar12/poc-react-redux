import React, {Component} from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronmyContainer extends Component {
    render() {
        const astronmy = this.state.astronmy;
        return (<AstronomyCard data = {astronmy}/>)
    }
constructor () {
    super();
    this.state = {astronmy: [] }
}
    componentDidMount () {
        const Api_KEY = '6L83rybGFaSlFLp1znK0eYOuk7plRbeqW0vVviIk';
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
        axios.get(END_POINT+Api_KEY).then( response =>{
            this.setState({astronmy: response.data});
            console.log(this.state)
        console.log(response);
        }).catch(error =>{
        console.log(error);
        })
    };
}



export default AstronmyContainer;