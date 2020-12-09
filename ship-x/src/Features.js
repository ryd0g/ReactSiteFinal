import 'bootstrap/dist/css/bootstrap.min.css';
import './Features.css';

function Features() {
  return (
    <section id='features'>
      <div class='container mb-5 mt-5 pb-5 pt-5'>
        <h2 class='features-title text-center'>Our Features</h2>
        <div class='row m-5'>
          <div class='col-lg-4' data-aos='zoom-in' data-aos-duration='1100'>
            <h3>Package Management</h3>
            <p class='lead'>
              Users will be able to manage their packages with our app. Having
              and all-in-one place to keep track of packages going in and out so
              small business owners can have an easier time managing their
              products.
            </p>
          </div>
          <div class='col-lg-4' data-aos='zoom-in' data-aos-duration='1100'>
            <h3>Shipping Calculator</h3>
            <p class='lead'>
              Having a way to calculate the shipping on your products will give
              users an easy experience selling products. Using our calculator,
              you can see an estimate on how much your shipping costs will be
              based on location of the customer and the sender.
            </p>
          </div>
          <div class='col-lg-4' data-aos='zoom-in' data-aos-duration='1100'>
            <h3>Inventory Management</h3>
            <p class='lead'>
              Another way to help our users will be to add a place to manage
              product inventory. This will allow owners to keep a list of all
              their products to manage their storefront. This feature will be
              coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
