import React, {Component} from 'react';
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
