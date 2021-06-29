import React from "react";

var position: object;
var coords: string;
const apiKey: string = '728d62266f51e8dc10c7e2b60337e3eb';

class GetInfo extends React.Component <{}, {latitude: string, longitude: string}>{
    constructor(props: {}){
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords)
        })
        this.updateCoords()
        this.fetchWeather()
    }

    async updateCoords(){
            this.setState({
                    latitude: await position.coords.latitude,
                    longitude: await position.coords.longitude
                });
    }

    fetchWeather(){
        fetch(`api.openweathermap.org/data/2.5/weather?lat=${this.latitude}}&lon=${this.longitude}&appid=${apiKey}`)
            .then(res => res.json())
            .then(res => this.displayWeather)
    }

    displayWeather(){

    }
    
    render(){
        return(
            <div>Get Info</div>
        )
    }
}

export default GetInfo;