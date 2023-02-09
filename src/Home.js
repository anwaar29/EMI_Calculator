import { useState } from "react";
import React from "react";

const Home = () => {
     const[vs,setvs]=useState(false)
    const [data, setData] = useState({
        Principle: "",
        Rate: "",
        Month:"",
        emi:''
    })
    const [store, setStore] = useState([]);
      const[emi,setemi]=useState()
      const[emistore,setemistore]=useState([])
      
      
    const changehandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submit = () => {
        let a=(data.Principle*data.Rate)/100
           let add=(+data.Principle+a)
           let finalemi=(add/data.Month).toFixed(2)
           setData(data.emi=finalemi)
             setemi(finalemi)
             setStore([...store, { ...data }])
           
            setData({
            Principle: "",
            Rate: "",
            Month:"",
            
          })
          console.log(emistore)
          console.log(setemistore)
}
function show(){
    setvs(true)
}
    return (
        <>
              <div className="main">
                <h2>Know Your EMI</h2>
            <label htmlFor="pr">Amount-</label>
            <input type="text" id="pr" name="Principle" value={data.Principle} placeholder="Enter Your Amount" onChange={changehandler} /> <br/><br/>
            <label htmlFor="rt">Intrest-</label>
            <input type="text" id="rt" name="Rate" value={data.Rate}  placeholder="Enter Your Rate" onChange={changehandler} /><br/><br/>
            <label htmlFor="mn">Month-</label>
            <input type="text" id="mn" name="Month" value={data.Month}  placeholder="Enter Your Month" onChange={changehandler} /><br/><br/>
            <button  onClick={submit}>Submit</button> &nbsp;&nbsp;&nbsp;
            <button onClick={show} >Show Histore</button><br/><br/>
             {emi?`Your EMI/MONTH is ${emi}`:<h3>Fill form to know your emi</h3>}
            <br /> 
            </div>
              
           {(vs===true)?<table border='5px'>
              <tr>
                <th>Serial No</th>
                <th>PRINCIPLE AMMOUNT</th>
                <th>RATE OF INTREST</th>
                <th>MONTH</th>
                <th>EMI</th>
              </tr>
              {store.map((e,i)=>{
                
            return(<>
              <tr>
                <td>{i+1}</td>
                <td>{e.Principle}</td>
                <td>{e.Rate}</td>
                <td>{e.Month}</td>
                <td>{e.emi}</td>
              </tr>
            </>)
           })}   
            </table>:' '
}
          
            
              


        </>
    )
}

export default Home;