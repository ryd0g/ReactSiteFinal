import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';

function Form() {
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

export default Form;
