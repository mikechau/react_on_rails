import React, { PropTypes } from 'react';

// Example of CSS modules.
import css from './HelloWorld.scss';

// Super simple example of the simplest possible React component
class HelloWorld extends React.Component {

  static propTypes = {
    helloWorldData: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,

    error: PropTypes.any,
  };

  // Not necessary if we only call super, but we'll need to initialize state, etc.
  constructor(props, context) {
    super(props, context);
    this.state = props.helloWorldData;
    this.setNameDomRef = this.setNameDomRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const name = this.nameDomRef.value;
    this.setState({ name });
  }

  setNameDomRef(nameDomNode) {
    this.nameDomRef = nameDomNode;
  }

  render() {
    console.log(`\HelloWorld demonstrating a call to console.log in \
spec/dummy/client/app/components/HelloWorld.jsx:18`);

    const { name } = this.state;
    const location = this.props.location;

    return (
      <div>
        <h3 className={css.brightColor}>
          Hello, {name}!
        </h3>
        <p>
          Location is:
          <span id="location">{this.props.location}</span>
        </p>
        <p>
          Say hello to:
          <input
            type="text"
            ref={this.setNameDomRef}
            defaultValue={name}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
  }
}

export default HelloWorld;
