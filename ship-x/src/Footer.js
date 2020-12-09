import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <section id='footer'>
      <div class='footer bg-primary p-4 text-white'>
        &copy; Ryan Lee 2020
        <a
          class='btn btn-social-icon btn-github'
          href='https://github.com/ryd0g'
          target='blank'>
          <span class='fa fa-github'></span>
        </a>
        <a
          class='btn btn-social-icon btn-instagram'
          href='https://www.instagram.com/r_lee925/'
          target='blank'>
          <span class='fa fa-instagram'></span>
        </a>
      </div>
    </section>
  );
}

export default Footer;
