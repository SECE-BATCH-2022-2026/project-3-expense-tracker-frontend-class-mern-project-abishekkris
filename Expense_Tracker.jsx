import React, { useEffect, useState } from "react";


function Expense_Tracker(props) {
    const [name, setname] = useState()
    const [amount, setamount] = useState(0)
   
    function changehand(event) {
        event.preventDefault()
        props.addform(name, amount)
        props.add_item(name,amount)

        // fetch("http://127.0.0.1:3000/get-expenses",)
        // .then((response)=> response.json())
        // .then((data)=> console.log("Server data",data))

        fetch('http://127.0.0.1:3000/Add_Expense',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body :JSON.stringify({
                title : name,
                amount:amount,
            })
        })
        .then((response)=> response.json())
        .then((data)=> console.log("Server data",data))
        .catch((err)=> console.log("API ERROR",err))

    }
         const handlechangename=(e)=>{
             setname(e)
        }
        const handlechangeamount=(e)=>{
            setamount(e)

        }
    return (
        <>
            <form onSubmit={changehand}>
                Expense: <input type="text" onChange={(e) => handlechangename (e.target.value)} /> <br />
                Amount:  <input type="number" onChange={(event) => handlechangeamount (event.target.value)} /> <br />
                <button>submit</button>
            </form>
        </>
    )

}

export default Expense_Tracker

