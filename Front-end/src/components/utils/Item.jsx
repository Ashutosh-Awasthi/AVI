import React from 'react'

const Item = (props) => {
    return (
        <>
        {/* use the item inside div.row */}
        <div className="col-12 col-lg-3">
            <div className="card" style={{width: '100%'}}>
                <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h6 className="card-title">{props.name}</h6>
                  <p className="card-text" style={{fontSize: '.75rem'}}>Calorie:</p>
                </div>
            </div>
        </div>  
        </>
    )
}

export default Item
