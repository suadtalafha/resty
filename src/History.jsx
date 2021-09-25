import React from "react";

function History(props) {


    return (
        <div>
            <h1>History page </h1>
            <ul>
                {props.addNewHistory.map((item, index) => {
                    return (
                        <div key={index} >
                           The url: {item.info.url} 
                           The method used: {item.info.method} 
                           
                           
                           </div>

                    )
                })}
            </ul>
        </div>
    )

}
export default History