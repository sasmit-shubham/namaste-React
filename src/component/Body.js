import ResCard from "./ResCard";
import resList from "../utils/data"
import { useState } from "react";


const Body = () =>
{ 
  const [restrauntList,setrestrauntList] = useState(resList);

  const filterTheRes = () =>{
    const filteredRes = restrauntList.filter((res)=>(
      res.data.avgRating>4
    ))
    setrestrauntList(filteredRes);
  }
  return (
  
    <div className="body">
        <button style={{padding:"10px", margin:"10px 0"}} onClick={filterTheRes}>top restaurant</button>
        {/* <div className="Search">Search</div> */}
        <div className="res-container">
            {
                restrauntList.map((restaurant)=>(
                    <ResCard key={restaurant.data.id} resData={restaurant}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default Body;