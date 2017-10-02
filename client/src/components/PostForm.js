import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../actions';

const renderField = ({ label, input, meta: { touched, error } }) => (
  <div className="form-field">
    <label>{label}</label>
    <input className="form-input" {...input} type="text" />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

class PostForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <Field name="title" component={renderField} type="text" label="Title" />
        </div>
        <div>
          <Field name="author" component={renderField} type="text" label="Author" />
        </div>

        <div>
          <Field name="category" component={renderField} label="category">
            <option name="React">React</option>
            <option name="Reduc">Redux</option>
            <option name="Udacity">Udacity</option>
          </Field>
        </div>

        <div>
          <Field name="text" component={renderField} type="text" label="Text" />
        </div>
        <button action="submit">Submit</button>
      </form>
    );
  }
}

PostForm = reduxForm({
  form: 'newPostForm'
})(PostForm);

export default PostForm;
