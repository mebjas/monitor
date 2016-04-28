var React = require('react');
var Header = require('./header');
var Footer = require('./footer');


var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
			<Header></Header>
        	{this.props.children}
			<Footer></Footer>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;