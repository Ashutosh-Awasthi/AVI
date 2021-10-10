import React from 'react'

const Main = (props) => {
    return (
        <>
            <div className="container-fluid" id='second'>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-11">

                        <div className="container bg-white" id='profile-main'>
                            {props.children}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
