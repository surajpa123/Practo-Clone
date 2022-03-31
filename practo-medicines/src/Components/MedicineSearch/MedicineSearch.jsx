import "./MedicineSearch.css";

import React from 'react'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function MedicineSearch() {
  return (
    <div>
        <div className="MedicineSearch">
            <div className="MedicineSearchInput">
            <i class="icon-ic_search_system"></i>
            <input type="text" placeholder="Search for medicines, health products and more" />
            </div>

            <div></div>

            <div className="MedicineSearchCart"><button>
              <div>
                <Badge color="secondary" badgeContent={1}>
		          <ShoppingCartIcon />{" "}
		          </Badge>
              </div>
              <span>VIEW CART</span>
              </button></div>
        </div>
    </div>
  )
}
