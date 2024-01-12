import React from 'react'

const BrandsFilter = () => {
    const brands = ["Reebok","Puma","Nike","Adidas","Fastrack","Converse"];

    return (
      <div class="box border-bottom">
        <label className="box-label text-uppercase d-flex align-items-center">
          {" "}
          Brands
        </label>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
        <div style={{ marginRight: '20px' }}>
          {brands.slice(0, Math.ceil(brands.length / 2)).map((brand) => (
            <div key={brand} style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '5px' }}>
                <input type="checkbox" name="brand" value={brand} /> {brand}
              </label>
            </div>
          ))}
        </div>
        <div>
          {brands.slice(Math.ceil(brands.length / 2)).map((brand) => (
            <div key={brand} style={{ marginBottom: '10px' }}>
              <label style={{ marginRight: '5px' }}>
                <input type="checkbox" name="brand" value={brand} /> {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
}

export default BrandsFilter