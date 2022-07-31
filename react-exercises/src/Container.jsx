
import React from "react";

export class Container extends React.Component{

        render(){
            return(
                <div>
                    <h2>{this.props.title}</h2>
                    {this.props.children}
                </div>
            )
        }
}