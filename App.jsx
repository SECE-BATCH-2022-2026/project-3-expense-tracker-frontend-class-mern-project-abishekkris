import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expense_Tracker from './Expense_Tracker'
import Expense_item from './Expense_item'
import { Link } from 'react-router-dom'

function App() {
  const [arr, setarr] = useState(
    [{ id: 1, name: "Pen", amount: "14" },
    { id: 2, name: "Pen1", amount: "15" }]
  )
  const [obj1, setobj1] = useState({
    id: "",
    name: "",
    amount: ""
  })
  
  function addform(name, amount) {
    var obj = {
      "id":"",
      "name": "",
      "amount": ""
    }
    obj.name = name
    console.log(obj.name);
    obj.amount = amount
    console.log(obj.amount);
    console.log(obj);
    arr.push(obj)
    console.log("First",arr);


  }
  function add_item(arr,name, amount) {
    setobj1({
      id: arr[arr.length - 1],
      name: name,
      amount: amount
    }
    )
  }
  return (
    <>
      <div>
        <Link to="about">Next Page</Link>
        <h1>I am React Developer</h1>
        <h1>Expense_Tracker</h1>
        <Expense_Tracker addform={addform} add_item={add_item} />
        <div>
          {arr.map((value1, index) => {
             
            console.log(value1);
            return (
              <Expense_item key={index} id={value1.id} name={value1.name} amount={value1.amount} />
            )
          })}
           
        </div>

      </div>
    </>
  )
}

export default App
