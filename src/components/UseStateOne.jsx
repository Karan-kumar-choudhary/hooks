import { useState } from "react";


const UseStateOne = () => {
    // yaha par javascript likhi jati hai . RETURN ke upar , return ke andar html likhi jati hai
    // neeche maine ek array banyi hai left side mei 
    // count ek variable ka naam hai , setCount bhi ek variable ka naam hai
    // useState ek inbuilt hook hai react ka toh use use krne ke liye call krna pdta hai
    // count maan ke chalo ek object hai and setCount uss object mei jo value hai usko update krne wala function
    // because count naam ke object mei multiple values store hongi jise hum neeche display krnge
    // setCount ek function hai jo ki update krega count mei jo bhi hai
    //  jo bhi cheeze apki website mei dynamic(baar baar badal rahi hai) hai unko aap state mei store krte ho
    const[count,setCount] = useState(5);

  return (
    <div>
        {/* curly brackets mei aap count mei jo bhi store ho raha hai woh live dekh skte ho 
         javascript mei jaisae event handler hua krte the theek waise hi react mei onclick hota hai

          onclick ek event listner hai , jiske andar ek callback function aata hai 
        //   onclick ki jagh aap koi aur naam nahi de skte ho
        */}
         <h1>My {count}</h1>
         <button onClick={()=>setCount(count+2)}>Click Here to Increase</button>            
    </div>
  )
}

export default UseStateOne