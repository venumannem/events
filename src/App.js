import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gallery">
        <div className="content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGVqdyDNZc3zGkSjgD9nczWrXtE6vOuYKPA&usqp=CAU"
            alt="shoe"
          />
          <h3 style={{ textAlign: "center" }}>Shoes</h3>
          <p>luxury shoes for men</p>
          <h6> $ 100.00 </h6>
          <ul>
            <li>
              <i class="fa fa-star checked"></i>
            </li>
            <li>
              <i class="fa fa-star checked"></i>
            </li>
            <li>
              <i class="fa fa-star checked"></i>
            </li>
            <li>
              <i class="fa fa-star checked"></i>
            </li>
            <li>
              <i class="fa fa-star "></i>
            </li>
          </ul>
          <button class="buy-1">Buy Now</button>
        </div>
        {/* */}
        {/* */}
        <div className="content">
          <img
            src="data:image/jpeg;base64,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"
            alt="Earphones"
          />
          <h3>Earphones</h3>
          <p>luxury Earphones for all</p>
          <h6> $ 70.00 </h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star "></i>
            </li>
          </ul>
          <button className="buy-2">Buy Now</button>
        </div>

        {/* */}
        {/* */}

        <div className="content">
          <img
            src="https://m.media-amazon.com/images/I/71RA4WUklbL._UX342_.jpg"
            alt="Watch"
          />
          <h3>Watch</h3>
          <p>luxury Watch for men</p>
          <h6> $ 65.00 </h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star "></i>
            </li>
          </ul>
          <button className="buy-3">Buy Now</button>
        </div>
        {/* */}
        {/* */}
        <div className="content">
          <img
            src="https://m.media-amazon.com/images/I/61GntimSEcL._UX569_.jpg"
            alt="Bag"
          />
          <h3>Bag</h3>
          <p>luxury Bag for men</p>
          <h6> $ 110.00 </h6>
          <ul>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star checked"></i>
            </li>
            <li>
              <i className="fa fa-star "></i>
            </li>
          </ul>
          <button className="buy-4">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
