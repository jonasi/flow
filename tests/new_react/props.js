var React = require('React');
var TestProps = React.createClass({

    propTypes: {
        x: React.PropTypes.string,
        z: React.PropTypes.number
    },

    getDefaultProps: function() {
        return {x: '', y: 0}
    },

    test: function() {
        var a: number = this.props.x; // error
        var b: string = this.props.y; // error
        var c: string = this.props.z; // error
    }
});

var element = <TestProps x={false} y={false} z={false} /> // 3 errors
