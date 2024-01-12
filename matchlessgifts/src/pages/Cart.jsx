import React from "react";
// import "../styles.css/Cart.css";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
import axios from "../services/axios";
import { Link, useParams,useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkedForOrder, setCheckedForOrder] = useState({});
  const [userId,setUserId]=useState(JSON.parse(localStorage.getItem("loggedInUser"))?.userid)
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [orderPlaced,setOrderPlaced]=useState(false)
  const navigate=useNavigate()
 
 
  const handleDeliveryOptionChange = (e) => {
    const selectedValue = e.target.value;

    switch (selectedValue) {
      case "1":
        setDeliveryCharge(100);
        break;
      case "2":
        setDeliveryCharge(500);
        break;
      case "3":
        setDeliveryCharge(1000);
        break;
      default:
        setDeliveryCharge(0);
        break;
    }
  };
  const handlePlaceOrder = () => {
    if (orderPrice - deliveryCharge === 0) {
      alert("Please select at least one item to purchase");
      return;
    }

    if (deliveryCharge === 0) {
      alert("Please select delivery option");
      return;
    }

  

    const orderItems = cartItems?.filter(cartItem => checkedForOrder[cartItem.cartId])
  ?.map(cartItem => ({
    productId: cartItem.product.id,
    productName: cartItem.product.name,
    productCategory: cartItem.product.category,
    productBrand: cartItem.product.brand,
    price: cartItem.product.price,
    quantity: cartItem.quantity,
  }));
  

  axios.post(`/order/${userId}/createOrder`, orderItems)
    .then(response => {
        // Handle the successful response, which contains the created order
        const createdOrder = response.data;
        console.log('Order created:', createdOrder);
        setOrderPlaced(true)
    })
    .catch(error => {
        // Handle errors
        console.error('Error creating order:', error);
    });


  }
  

  const calculateOrderPrice = () => {
    let totalPrice = 0;
  
    if (Array.isArray(cartItems)) {
      cartItems.forEach((cartItem) => {
        if (cartItem && checkedForOrder[cartItem.cartId]) {
          totalPrice += cartItem.product.price * cartItem.quantity;
        }
      });
    } else {
      console.error("cartItems is not an array:", cartItems);
    }
  
    setOrderPrice(totalPrice + deliveryCharge);
  };
  const deleteFromCheckedForOrder = (key) => {
    const updatedCheckedForOrder = { ...checkedForOrder };

    delete updatedCheckedForOrder[key];

    setCheckedForOrder(updatedCheckedForOrder);
  };
  const deleteCartItem = (cartId) => {
    axios
      .get(`/cart/delete/${cartId}`)
      .then((response) => {
        console.log("Item deleted successfully:", response.data);
        getCartByUserId();
        deleteFromCheckedForOrder(cartId);
      })
      .catch((error) => {
        console.error("Error deleting item:", error.message);
      });
  };

  const incrementByOne = (cartId) => {
    axios
      .get(`/cart/plusone/${cartId}`)
      .then((response) => {
        console.log("Quantity increased by one successfully:", response.data);
        getCartByUserId();
      })
      .catch((error) => {
        console.error("Error increasing quantity:", error.message);
      });
  };

  const decrementByOne = (cartId) => {
    if (cartItems?.find((cartItem) => cartItem?.cartId === cartId).quantity <= 1)
      return;

    axios
      .get(`/cart/minusone/${cartId}`)
      .then((response) => {
        console.log("Quantity decreased by one successfully:", response.data);
        getCartByUserId();
      })
      .catch((error) => {
        console.error("Error decreasing quantity:", error.message);
      });
  };

  const getCartByUserId = () => {
    if(userId===null) {
      
    }
    axios
      .get(`/cart/${userId}/getCart`)
      .then((response) => setCartItems(response.data))
      .catch((error) => {setCartItems([])
      navigate("/not-found")
      });
  };

 

  useEffect(() => {
    console.log("fjfj");
    getCartByUserId();
    setCheckedForOrder(
      Object.fromEntries(cartItems?.map((item) => [item.cartId, true]))
    );
    setUserId(JSON.parse(localStorage.getItem("loggedInUser"))?.userid)
  }, [localStorage.getItem("loggedInUser")]);

  useEffect(()=>{calculateOrderPrice()}, [cartItems, checkedForOrder, deliveryCharge]);

  return (
    <div>
      <section
        className=" h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="py-5 h-100 h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="h-100 py-5 h-cutsom"
                style={{ borderRadius: "150px" }}
              >
                <div className="card-body p-0">
                {cartItems && cartItems.length > 0 ?(  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cartItems?.length} items
                          </h6>
                        </div>
                        <hr className="my-4"/>

                       
                        <div>
                          {cartItems?.map((cartItemObj) => (
                            <CartItem
                              key={cartItemObj.id}
                              cartItemObj={cartItemObj}
                              deleteCartItem={deleteCartItem}
                              incrementByOne={incrementByOne}
                              decrementByOne={decrementByOne}
                              checkedForOrder={checkedForOrder}
                              setCheckedForOrder={setCheckedForOrder}
                            />
                          ))}
                        </div>

                        {console.log(checkedForOrder)}

                        <hr className="my-4" />

                  

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/shop" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                      
                        <hr className="my-4" />

                      
                        <h5 className="text-uppercase mb-3">Shipping</h5>

                        <div className="mb-4 pb-2">
                          <select
                            className="select"
                            onChange={handleDeliveryOptionChange}
                          >
                            <option>Please select Delivery option</option>
                            <option value="1">Standard-Delivery- ₹ 100</option>
                            <option value="2">Fast-Delivery - ₹500</option>
                            <option value="3">One-Day Delivery - ₹1000</option>
                          </select>
                        </div>

                       
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">
                            Total price (in ₹){" "}
                          </h5>
                          <h5>{orderPrice}</h5>
                        </div>

{
  orderPlaced===false ?(
<button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                          onClick={handlePlaceOrder}
                        >
                          Place Order
                        </button>
  ):
  ( <div style={{                       
    cursor: 'inherit',
  }} className="btn btn-success">Order Placed !</div>)
}
                        
                      </div>
                    </div>
                  </div>):(
              <div className="row g-0">
                {/* Display your image or message for an empty cart */}
                <img src="src/assets/emptycart.png" alt="Empty Cart" />
              </div>
            )}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
