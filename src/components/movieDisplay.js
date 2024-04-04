import React,{useState} from "react";
const Moviedisplay=(props)=>{
   let data=props.data;
//    console.log(data)
   let selectedMovie=props.selectedMovie;
  
return(
    <div>
        <table className="table">
        <tr className="tableheading">
                    <th>Title</th>
                    <th>Genres</th>
                    <th>Year</th>
                </tr>
          {  data.map((iteam,index)=>(
              <tr key={index} className="tablerow"><td>{iteam.title}</td>
              <td>{iteam.genre}</td>
              <td>{iteam.year}</td></tr> 
            ))}
        </table>
    </div>
)


}

export default Moviedisplay;