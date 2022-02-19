import React from "react"
class Footer extends React.Component
{
    render()
    {
        return(  //siempre paréntesis para que no se confunda el compilador
            <div className="row">
                <div className="col-12 text-center mt-5">
                    Copyright &#169;
                </div>
            </div>
        )
    }
}
export default Footer