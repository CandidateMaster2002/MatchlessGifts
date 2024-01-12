import React, { useEffect, useState } from 'react';

const CustomerReviews = ({category}) => {

    const [dummyCustomerReviews, setDummyCustomerReviews] = useState(null);

    const initializeReviews = () => {
        setDummyCustomerReviews({
                    "Watches": [
                "The watch I purchased is stylish and functional. It's a perfect blend of fashion and technology. I receive compliments every time I wear it.",
                "I am delighted with my new watch. It's elegant, durable, and accurate. The attention to detail in its design truly sets it apart from other timepieces.",
                "My watch is a showstopper! The craftsmanship is superb, and it adds a touch of sophistication to my outfits. I highly recommend this brand."
              ],
              "Tshirts": [
                "These T-shirts are my wardrobe staples. The quality of the fabric is unmatched, providing comfort without compromising style. They are a must-have!",
                "I love the fit and feel of these T-shirts. They are versatile and perfect for any occasion. The variety of colors allows me to express my style effortlessly.",
                "These T-shirts exceeded my expectations. The softness, durability, and unique designs make them stand out. A great addition to my casual wear collection."
              ],
              "Jeans": [
                "My new jeans are a game-changer. The fit is fantastic, and they contour to my body perfectly. The attention to detail in stitching and design is impressive.",
                "These jeans are a fashion statement. The quality denim, coupled with stylish cuts, makes them my go-to choice. They're comfortable and elevate my look.",
                "I've finally found the perfect pair of jeans! The fabric is comfortable, and the fit is just right. They are versatile and easily complement my style."
              ],
              "Shoes": [
                "My new shoes are not only stylish but also incredibly comfortable. The attention to comfort and design makes them my favorite footwear. Highly recommended!",
                "These shoes are a fashion-forward choice. The craftsmanship and attention to detail are apparent. They add a touch of sophistication to both casual and formal outfits.",
                "I'm impressed with the quality of these shoes. They provide excellent support and are stylish too. The durability ensures they will be a staple in my wardrobe."
              ]   
        });
      };

      useEffect(() => {
        initializeReviews();
      }, []); // Run once on mount
      

  return (
    <section>

      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h3 className="mb-4">Customer Reviews</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            {/* Sample text, replace with actual component logic or dynamic data */}
            Our customers love our products! Here's what some of them have to say about their experience.
          </p>
        </div>
      </div>

      <div className="row text-center">
        {/* Customer 1 */}
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong" width="150" height="150" alt="Customer 1" />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>
            {dummyCustomerReviews && dummyCustomerReviews[category] && dummyCustomerReviews[category][0]}
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            {/* Star ratings */}
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star-half-alt fa-sm text-warning"></i></li>
          </ul>
        </div>

        {/* Customer 2 */}
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong" width="150" height="150" alt="Customer 2" />
          </div>
          <h5 className="mb-3">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>
            {dummyCustomerReviews && dummyCustomerReviews[category] && dummyCustomerReviews[category][1]}
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            {/* Star ratings */}
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
          </ul>
        </div>

        {/* Customer 3 */}
        <div className="col-md-4 mb-0">
          <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong" width="150" height="150" alt="Customer 3" />
          </div>
          <h5 className="mb-3">John Smith</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>
            {dummyCustomerReviews && dummyCustomerReviews[category] && dummyCustomerReviews[category][2]}
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            {/* Star ratings */}
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="fas fa-star fa-sm text-warning"></i></li>
            <li><i className="far fa-star fa-sm text-warning"></i></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
