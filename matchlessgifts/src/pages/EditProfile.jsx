import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditProfile = () => {
    const navigate=useNavigate();
    localStorage.getItem('loggedInUser')===null
    navigate("/")

    const id=useParams()
  return (
    <>
    {" "}
    <h1>Hi, Admin</h1>
    <h2>Modify a New Product to Database</h2>
    <br />
    <Link
      to="/admin/add-product"
      type="button"
      class="btn btn-secondary"
      style={{ textTransform: "none" }}
    >
      ADD instead of Modifying
    </Link>
    <br />
    <form>
      <br />

      <label htmlFor="id">Product ID: </label>
      <input
        type="number"
        id="id"
        name="id"
        value={product.id}
        onChange={handleInputs}
        required
      />

      <br />
      <div>
        <button
          type="button"
          className="btn btn-info"
          style={{
            fontSize: "small",
            textTransform: "none",
            padding: "5px 10px",
          }}
          onClick={getProductInfo}
        >
          Get Product Info
        </button>
      </div>
      <br />

      <br />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={product.name}
        onChange={handleInputs}
        name="name"
        required
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={product.category}
        onChange={handleInputs}
        name="category"
        required
      >
        <option value="Shoes">Shoes</option>
        <option value="Watches">Watches</option>
        <option value="Jeans">Jeans</option>
        <option value="TShirts">T-Shirts</option>
      </select>

      <label htmlFor="brand">Brand:</label>
      <select
        id="brand"
        value={product.brand}
        onChange={handleInputs}
        name="brand"
        required
      >
        <option value="Adidas">Adidas</option>
        <option value="Nike">Nike</option>
        <option value="Puma">Puma</option>
        <option value="Reebok">Reebok</option>
        <option value="Converse">Converse</option>
        <option value="Fastrack">Fastrack</option>
      </select>

      <label htmlFor="original_price">Original Price (in ₹):</label>
      <input
        type="number"
        id="original_price"
        value={product.original_price}
        onChange={handleInputs}
        name="original_price"
        required
      />

      <label htmlFor="price">Discounted Price (in ₹):</label>
      <input
        type="number"
        id="price"
        value={product.price}
        onChange={handleInputs}
        name="price"
        required
      />

      <label htmlFor="details">Details:</label>
      <input
        type="text"
        id="details"
        value={product.details}
        onChange={handleInputs}
        name="details"
        rows="4"
        required
      ></input>

      <label htmlFor="img_url">Image URL:</label>
      <input
        type="text"
        id="img_url"
        value={product.img_url}
        onChange={handleInputs}
        name="img_url"
        required
      />

      <button type="submit" onClick={handleModifyProduct}>Modify</button>
    </form>
  </>
  )
}

export default EditProfile