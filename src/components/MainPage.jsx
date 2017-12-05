import React, {Component} from 'react';
import { connect } from 'react-redux'

class MainPage extends Component {
  render() {
    const path = this.props.path;
    if(!path.length){
      return null;
    }
    return (
      <div>
        <p>hello</p>
        <p>{path[path.length-1].name}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    path: state.menu.path
  }
}

export default connect(mapStateToProps)(MainPage);
