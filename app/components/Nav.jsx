var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch:function(e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.search.value='';
      //Cambiar de pagina
      window.location.hash= '#/?location='+ encodedLocation;
      // this.props.onSearch(location);
    }
  },
  render: function (){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"> Aplicacion del tiempo en React</li>
            <li>
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold'}}> Get Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName="active" activeStyle={{fontWeight:'bold'}}> About</Link>
            </li>
            <li>
              <Link to='/examples' activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples</Link>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit= {this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value = "Consultar"/>
              </li>
            </ul>
          </form>
        </div>

      </div>

    );
  }
});

module.exports= Nav;
