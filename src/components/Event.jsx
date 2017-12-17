/*import React, {Component} from 'react';
import { connect } from 'react-redux'


class Event extends Component {
  render() {
    const event = this.props.event;
    return (
      <div className="event">
        <p>Events:</p>
        {event.map(({id, name, type}) =>  {if(type == "EVENT") return <p key={id} id={id}  className="event">{name}</p>})}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.menu.children
  }
}

export default connect(mapStateToProps)(Event);
*/


import React, {Component} from 'react'
import axios from 'axios' 
import { fetchPosts } from '../actions/index1'
import { connect } from 'react-redux'
import styles from '../../styles/style.scss'
var ids;
class Ap extends Component {
  
  componentWillReceiveProps (newProps) {
    if(this.props.menu === newProps.menu) return null
    else{
    console.log("prev",this.props.menu.path)
    const pat = newProps.menu.path
    console.log("new"+pat)
    console.log(pat[pat.length-1])
    if(pat.length>0){
    if(pat[pat.length-1].type=="EVENT"){
    /* if в последнем элементе меню соревнование */
      /* request events */
      ids = pat[pat.length-1].competition_id
      this.props.dispatch(fetchPosts(ids))
    }
  }
  }
}
   shouldComponentUpdate(){
    if(!ids) return false
    else return true
   } 
   
   
  render() {
    //const {path} = this.props.menu
    const events = this.props.events
    //const {event} = this.props.events
    return (
      <div className = 'event'>
        <h1>Events:</h1>
        {events.map(({event, id, name}) => <p key={event.id} id={event.id}>{event.name}</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    events: state.events
  }
}

export default connect(mapStateToProps)(Ap)
