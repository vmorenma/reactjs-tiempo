var React = require('react');
var {Link} = require('react-router');
var Examples = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="text-center">Examples Component</h1>
        <p>Exemplos de localizaciones para probar la aplicación.</p>
        <ol>
          <li>
            <Link to="/?location=Viladecans"> Viladecans </Link>
          </li>
          <li>
            <Link to="/?location=Gava"> Gava </Link>
          </li>
        </ol>
      </div>

    );
  }
});

module.exports= Examples;
