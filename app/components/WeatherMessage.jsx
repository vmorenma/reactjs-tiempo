var React = require('react');
// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} =this.props;
//     return(
//       <h3>Hace {temp} grados en {location}.</h3>
//     );
//   }
// });

var WeatherMessage = (props) => {
  return(
    <h3 className="text-center">Hace {props.temp} grados en {props.location}.</h3>
  );
};

module.exports= WeatherMessage;
