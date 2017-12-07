import React, {Component} from 'react'
import axios from 'axios' 
import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount () {
    console.log(this.props)
    this.props.dispatch(fetchPosts(''))
  }
  
  click = (e) => {
    this.props.dispatch(fetchPosts(e.target.id))
  }
  
  render() {
    const {path, children} = this.props.menu
    return (
      <div>
        <p onClick={this.click}>All Sports</p>
        {path.map(({id, name, type}) => <p key={id} id={id}  onClick={this.click} className="path">{name}</p>)}
        {children.map(({id, name, type}) => <p key={id} id={id} onClick={this.click} className="children">{name}</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(App)
