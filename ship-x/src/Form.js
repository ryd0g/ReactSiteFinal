import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  render() {
    return (
      <section id='CTA'>
        <div class='jumbotron text-center mb-0'>
          <p class='lead mb-4'>Sign Up for More Infomation</p>
          <div class='d-flex justify-content-center'>
            <form class='form-inline' action='javascript:void(0);'>
              <input
                type='text'
                class='form-control mb-2 mr-sm-2'
                placeholder='Name'
              />
              <input
                type='text'
                class='form-control mb-2 mr-sm-2'
                placeholder='Email'
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
ReactDOM.render(<Form />, document.getElementById('root'));

export default Form;
