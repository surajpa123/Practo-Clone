import "./MedicineSearch.css";

import React from 'react'

export default function MedicineSearch() {
  return (
    <div>
        <div className="MedicineSearch">
            <div className="MedicineSearchInput">
            <i class="icon-ic_search_system"></i>
            <input type="text" placeholder="Search for medicines, health products and more" />
            </div>

            <div></div>

            <div className="MedicineSearchCart"><button><i class="icon-ic_cart_fill"></i><span>VIEW CART</span></button></div>
        </div>
    </div>
  )
}
