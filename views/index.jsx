var React = require('react');
var DefaultLayout = require('./layouts/default');

var Dashboard = React.createClass({
	render: function() {
		return (
			 <DefaultLayout title={this.props.title}>
				<h2>dashboard </h2>
			</DefaultLayout>
		);
	}
});

module.exports = Dashboard;