import React from "react"




export default function Interests() {
    return (
       <div className="interests">
            <h3>Interests</h3>
            <div className="row">
                <div className="column" >
                    <div className="nested-row">
                        <p>Family</p>
                    </div>
                    <div className="nested-row">
                        <p>Sports</p>
                    </div>
                    <div className="nested-row">
                        <p>Food</p>
                    </div>
                </div>
                <div className="column" >
                    <div className="nested-row">
                        <p>Gaming</p>
                    </div>
                    <div className="nested-row">
                        <p>TTRPG's</p>
                    </div>
                    <div className="nested-row">
                        <p>Podcasting</p>
                    </div>
                </div>
            </div>
          
       </div>
    )        
}