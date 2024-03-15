import React from "react";
import './Expense_item.css'
function Expense_item(promps){  
  function delete_items(i){
    console.log(i,"Index to be deleted");
  }
    return (
        <> <div className="display">
            <div>
                {promps.id}
            </div>
            <div>
              {promps.name}
            </div>
            <div>
            {promps.amount}
            </div>
            <button onClick={()=>delete_items(promps.id)}>Delete</button>
            </div>
        </>
    )
}
export default Expense_item