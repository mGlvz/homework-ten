var MODEL = (function(){
    var _homeContent = `<div class="home">
    <section class="hero">
      <div class="callout-container">
        <div class="callout">travel-fly</div>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          aliquid minus nemo sed est.
        </div>
        <div class="read-more">READ MORE</div>
      </div>
    </section>
    <section class="promo-trips">
      <div class="trip">
        <img src="images/tour/tour-01.jpg" alt="" />
        <div class="overlay">
          <div class="title-price">
            <div class="title">ISRAEL</div>
            <div class="price">from $1000</div>
          </div>
          <div class="button">LEARN MORE</div>
        </div>
      </div>
      <div class="trip">
        <img src="images/tour/tour-02.jpg" alt="" />
        <div class="overlay">
          <div class="title-price">
            <div class="title">U.S.A</div>
            <div class="price">from $1500</div>
          </div>
          <div class="button">LEARN MORE</div>
        </div>
      </div>
      <div class="trip">
        <img src="images/tour/tour-03.jpg" alt="" />
        <div class="overlay">
          <div class="title-price">
            <div class="title">A.U.S</div>
            <div class="price">from $1800</div>
          </div>
          <div class="button">LEARN MORE</div>
        </div>
      </div>
    </section>
    <section class="booking">
      <div class="booking-wrapper">
        <h1>Booking Form</h1>
        <div class="two-inputs">
          <div class="short-input">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="    name..."
            />
          </div>
          <div class="short-input">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="    email..."
            />
          </div>
        </div>
        <div class="two-inputs">
          <div class="short-input">
            <input
              type="text"
              name="country"
              id="country"
              placeholder="    country..."
            />
          </div>
          <div class="short-input">
            <input
              type="text"
              name="hotel"
              id="hotel"
              placeholder="    hotel..."
            />
          </div>
        </div>
        <div class="long-input">
          <label for="check-in">Check-in</label>
          <input type="text" placeholder="    05/10/2020" />
        </div>
        <div class="long-input">
          <label for="check-out">Check-out</label>
          <input type="text" placeholder="    05/20/2020" />
        </div>
        <div class="three-inputs">
          <div class="small-input">
            <label for="adult">Adult</label>
            <input type="text" placeholder="    2" />
          </div>
          <div class="small-input">
            <label for="children">Children</label>
            <input type="text" placeholder="    0" />
          </div>
          <div class="small-input">
            <label for="rooms">Rooms</label>
            <input type="text" placeholder="    1" />
          </div>
        </div>
        <div class="message">
          <input
            type="text"
            name="message"
            id="message"
            placeholder=" message..."
          />
        </div>

        <input class="booking-submit" type="submit" value="Submit" />
      </div>
    </section>
  </div>`;
    var _aboutContent = `<section class="about">
    <div class="about-container">
      <div class="about-title">ABOUT:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>
  <section class="quotes">
    <div class="quotes-title">
      <h1>CLIENT QUOTES:</h1>
    </div>
    <div class="aboutPerson">
      <div class="personImage">
        <img src="images/about-client-01.jpg" alt="" />
      </div>
      <div class="about-quote">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
      </div>
      <div class="author">- Miranda Brown</div>
    </div>

    <div class="aboutPerson">
      <div class="personImage">
        <img src="images/about-client-02.jpg" alt="" />
      </div>
      <div class="about-quote">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
      </div>
      <div class="author">- Johnathan wes</div>
    </div>
  </section>`;
    var _toursContent = `<section class="tour-hero">
    <div class="hero-image">
      <div class="hero-callout">TOURS:</div>
    </div>
  </section>
  <section class="tours-wrapper">
    <div class="tour">
      <img src="images/tour/tour-01.jpg" alt="" />
      <div class="overlay">
        <h1>Israel</h1>
        <div class="price">from $1000</div>
        <a id="israel" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-02.jpg" alt="" />
      <div class="overlay">
        <h1>U.S.A</h1>
        <div class="price">from $1500</div>
        <a id="usa" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-03.jpg" alt="" />
      <div class="overlay">
        <h1>A.U.S</h1>
        <div class="price">from $1800</div>
        <a id="aus" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-04.jpg" alt="" />
      <div class="overlay">
        <h1>Zealand</h1>
        <div class="price">from $1200</div>
        <a id="zealand" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-05.jpg" alt="" />
      <div class="overlay">
        <h1>France</h1>
        <div class="price">from $2500</div>
        <a id="france" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-06.jpg" alt="" />
      <div class="overlay">
        <h1>Egypt</h1>
        <div class="price">from $900</div>
        <a id="egypt" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-07.jpg" alt="" />
      <div class="overlay">
        <h1>Japan</h1>
        <div class="price">from $1300</div>
        <a id="japan" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-08.jpg" alt="" />
      <div class="overlay">
        <h1>Canada</h1>
        <div class="price">from $2000</div>
        <a id="canada" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>

    <div class="tour">
      <img src="images/tour/tour-09.jpg" alt="" />
      <div class="overlay">
        <h1>U.A.E</h1>
        <div class="price">from $3000</div>
        <a id="uae" href="#">
          <div class="learnMore">Learn More</div>
        </a>
      </div>
    </div>
  </section>`;
    var _offersContent = `<section class="offers">
    <div class="offers-container">
      <div class="offers-title">SPECIAL OFFER(S):</div>
      <div class="offer1">
        <div class="offer-image1"></div>
        <div class="offer-content">
          <div class="offer-title">
            BARCELONA, SPAIN
          </div>
          <div class="offer-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          </div>
          <div class="offer-button">
            <div class="button-text">LEARN MORE</div>
          </div>
        </div>
      </div>
      <div class="offer2">
        <div class="offer-image2"></div>
        <div class="offer-content">
          <div class="offer-title">
            BANGKOK, THAILAND
          </div>
          <div class="offer-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          </div>
          <div class="offer-button">
            <div class="button-text">LEARN MORE</div>
          </div>
      </div>
    </div>
  </section>`;
    var _blogContent = `<section class="blog">
    <div class="blog-container">
      <div class="blog-title">BLOG:</div>
      <div class="blog-post">
        <div class="date-container">
          <div class="date-box">
            <div class="date-day">06</div>
            <div class="date-month">JUN</div>
          </div>
        </div>
        <div class="content-container">
          <div class="post-image"></div>
          <div class="post-title">
            <p>Sed et persipiatis unde omnis iste natus</p>
          </div>
          <div class="post-content">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
      <div class="blog-post2">
        <div class="date-container">
          <div class="date-box">
            <div class="date-day">23</div>
            <div class="date-month">JUL</div>
          </div>
        </div>
        <div class="content-container">
          <div class="post-image"></div>
          <div class="post-title">
            <p>Sed et persipiatis unde omnis iste natus</p>
          </div>
          <div class="post-content">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    var _contactContent = `<section class="contact">
    <div class="contact-container">
      <div class="contact-title">CONTACT US:</div>
      <div class="contact-box">
        <div class="map-box">
          <div class="map-image"></div>
          <div class="address-box">
            <p>
              travel-fly Inc. <br />
              8901 Marmora Road,<br />
              Glasgow, D04 89GR.<br />
              Freephone:+1 800 559 6580<br />
              Telephone:+1 800 603 6035<br />
              FAX:+1 800 889 9898<br />
              E-mail: mail@travelfly.org
            </p>
          </div>
        </div>
        <div class="input-box">
          <div class="input1">
            <label for="your name"></label>
            <input type="text" placeholder="    Your name..." />
          </div>
          <div class="input2">
            <label for="email address"></label>
            <input type="text" placeholder="    Email Address..." />
          </div>
          <div class="input3">
            <label for="company"></label>
            <input type="text" placeholder="    Company..." />
          </div>
          <div class="input4">
            <label for="message"></label>
            <input type="text" placeholder="    Message..." />
          </div>
          <div class="message-button">
            <div class="send-message">SEND MESSAGE</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

    var _israelContent = `<section class="tour-hero">
    <div class="israel-image">
      <div class="callout">Isreal tour package:</div>
      <div class="starting">STARTING FROM $1000</div>
    </div>
  </section>

  <section class="tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _usaContent =`<section class="tour-hero">
    <div class="usa-image">
      <div class="callout">U.S.A tour package:</div>
      <div class="starting">STARTING FROM $1500</div>
    </div>
  </section>

  <section class="usa-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _ausContent =`<section class="tour-hero">
    <div class="aus-image">
      <div class="callout">Australia tour package:</div>
      <div class="starting">STARTING FROM $1800</div>
    </div>
  </section>

  <section class="aus-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _zealandContent =`<section class="tour-hero">
    <div class="zealand-image">
      <div class="callout">New Zealand tour package:</div>
      <div class="starting">STARTING FROM $1200</div>
    </div>
  </section>

  <section class="zealand-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _franceContent =`<section class="tour-hero">
    <div class="france-image">
      <div class="callout">France tour package:</div>
      <div class="starting">STARTING FROM $2500</div>
    </div>
  </section>

  <section class="france-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _egyptContent =`<section class="tour-hero">
    <div class="egypt-image">
      <div class="callout">Egypt tour package:</div>
      <div class="starting">STARTING FROM $900</div>
    </div>
  </section>

  <section class="egypt-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _japanContent =`<section class="tour-hero">
    <div class="japan-image">
      <div class="callout">Japan tour package:</div>
      <div class="starting">STARTING FROM $1300</div>
    </div>
  </section>

  <section class="japan-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _canadaContent =`<section class="tour-hero">
    <div class="canada-image">
      <div class="callout">Canada tour package:</div>
      <div class="starting">STARTING FROM $2000</div>
    </div>
  </section>

  <section class="canada-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;
    var _uaeContent =`<section class="tour-hero">
    <div class="uae-image">
      <div class="callout">U.A.E. tour package:</div>
      <div class="starting">STARTING FROM $3000</div>
    </div>
  </section>

  <section class="uae-tour-pics">
    <div class="pic1"></div>
    <div class="pic2"></div>
    <div class="pic3"></div>
  </section>

  <section class="days">
    <div class="day1">
      <div class="about-title">Day #1:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day2">
      <div class="about-title">Day #2:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    <div class="day3">
      <div class="about-title">Day #3:</div>
      <div class="about-text">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore
          et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </section>

  <section class="book-button">
    <div class="button">
      <div class="button-text">BOOK NOW</div>
    </div>
  </section>`;

  function initListeners(){
    $("a").click(function(e){
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id
        let contentID = aID + "Content";

        MODEL.updateView(contentID);
    })
}
    
    var _updateView = function(pageName){
        console.log("model " + pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));

        if (pageContent == "_homeContent"){
          $("#nav").removeClass("dark");
        }else{
          $("#nav").addClass("dark");
        }

        initListeners();
    }

    return{
        updateView: _updateView,
    }
})();