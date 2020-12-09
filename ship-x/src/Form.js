import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import React from 'react';

class Form extends React.Comoponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <section id='CTA'>
        <div class='jumbotron text-center mb-0'>
          <p class='lead mb-4'>Sign Up for More Infomation</p>
          <div class='d-flex justify-content-center'>
            <form class='form-inline' action='javascript:void(0);'>
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input type='date' class='form-control mb-2 mr-sm-2' />
              <label for='message'>Any questions or comments?</label>
              <textarea
                class='form-control mb-2 mr-sm-2'
                id='message'
                rows='3'></textarea>
              <button class='btn btn-primary mb-2' id='submit'>
                Submit
              </button>
              <div class='alert alert-dark alert-dismissable'>
                <button
                  type='button'
                  class='close'
                  data-dismiss='alert'
                  aria-hidden='true'>
                  &times;
                </button>
                Thanks for signing up!
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Form;
