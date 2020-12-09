import 'bootstrap/dist/css/bootstrap.min.css';
import './Title.css';

function Title() {
  return (
    <section id='hero'>
      <div class='jumbotron text-center'>
        <h1>Ship-X</h1>
        <p class='lead'>Getting your products shipped the right way!</p>
        <a href='#' class='btn btn-primary'>
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Title;
