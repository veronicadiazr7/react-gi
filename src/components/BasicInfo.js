import React, { Component } from "react";

export default class BasicInfo extends Component {
  render() {
    return (
      <div>
        <section className="Client-info">
          <ul>
            <li> Client ID: {this.props.info.id}</li>
            <ul>
              <li>Name: {this.props.info.name}</li>
              <li>Phone Number: {this.props.info.phoneNumber}</li>
              <li>Date of Birth: {this.props.info.birthDate}</li>
            </ul>
          </ul>
        </section>
      </div>
    );
  }
}
