import React from 'react';

const FAQs = () => {
  return (
    <section>
      <h3 className="text-center mb-4 pb-2 text-primary fw-bold">Frequently Asked Questions</h3>
      <p className="text-center mb-5">
        Explore answers to common questions about our ecommerce services.
      </p>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="far fa-question-circle text-primary pe-2"></i> How can I place an order?</h6>
          <p>
            To place an order, simply browse our product catalog, add items to your cart, and proceed to checkout. Follow the instructions to complete your purchase securely.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fas fa-shipping-fast text-primary pe-2"></i> What are the shipping options?</h6>
          <p>
            We offer various shipping options, including standard and expedited delivery. You can choose the shipping method that suits your preferences during the checkout process.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="far fa-credit-card text-primary pe-2"></i> How can I update my payment information?</h6>
          <p>
            Updating your payment information is easy. Simply go to your account settings, navigate to the billing section, and update your payment details.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="far fa-heart text-primary pe-2"></i> Can I return or exchange a product?</h6>
          <p>
            Yes, we accept returns and exchanges. Please review our return policy for detailed information on the process and conditions.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fas fa-gift text-primary pe-2"></i> Do you offer gift cards?</h6>
          <p>
            Absolutely! Gift cards are available for purchase. They make for the perfect gift for your loved ones to choose their favorite products.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fas fa-comments text-primary pe-2"></i> How can I contact customer support?</h6>
          <p>
            Our customer support team is ready to assist you. Visit our contact page to find various ways to reach out to us, including phone, email, and live chat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
