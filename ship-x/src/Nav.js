import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

function Navbar() {
  return (
    <nav class='navbar sticky-top navbar-expand navbar-dark bg-primary'>
      <a class='navbar-brand' href='homepage.html'>
        Ship-X
      </a>
      <div class='navbar-nav'>
        <div class='dropdown'>
          <a
            class='nav-link dropdown-toggle'
            data-toggle='dropdown'
            href='#'
            role='button'
            aria-haspopup='true'
            aria-expanded='true'>
            Menu
          </a>
          <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a class='dropdown-item' href='#'>
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
