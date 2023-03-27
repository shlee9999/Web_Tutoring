import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="card_custom">
        <div className="card_header">
          <h4 id="card_header">{this.props.title}</h4>
        </div>
        <div className="card_body">
          <h2>
            <b>{this.props.cost}</b> <small>/ mo</small>
          </h2>
          <ul>
            <li>{this.props.userNumber} users included</li>
            <li>{this.props.storage} GB of storage</li>
            <li>{this.props.support} support</li>
            <li>{this.props.access}Help center access</li>
          </ul>
          <button className={`btn ${this.props.color} card_button`}>
            {this.props.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
