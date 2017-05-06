var React = require('react');
// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });
var About = (props) =>{
  return (
    <div>
      <h1 className="text-center page-title">About Component</h1>
      <p>Esto es una aplicacion web construida con la Tecnologia de React</p>
      <p>Herramientas utilizadas</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Este es el
            Framework usado.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Esta es la
            API usada.
        </li>

      </ul>
    </div>

  )
};

module.exports= About;
