import React, { Component } from 'react';

export default class Comments extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <button>Add Comment</button>
          </div>
        </form>
      </div>
    );
  }
}
