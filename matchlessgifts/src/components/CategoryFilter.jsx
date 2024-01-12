import React from 'react'
import SortingFilter from './SortingFilter'

const CategoryFilter = () => {
  return (
   <>
   
   <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">All</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Shoes</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Watches</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Tshirts</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Jeans</a></li>

        
        <li class="nav-item"><a href="#" class="nav-link">
            
            <SortingFilter/>
            </a></li>

      </ul>
    </header>
  </div>
   
   </>
  )
}

export default CategoryFilter