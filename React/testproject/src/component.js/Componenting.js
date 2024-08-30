import React from "react";
import { Component } from "react";
 class WelComepage extends Component
{
    render()
    {
        return(
            <div>
                <HeaderComp name="Welcome to Shoppy Page"/>
                <HeaderComp name="Register Form"/>
                <BodyComponent/>
            </div>
        )
    }
}
export default WelComepage

export class HeaderComp extends Component
{
    render()
    {
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}


export class BodyComponent extends Component
{
    render()
    {
        return(
            <div>
                <label>Name</label> <input type="text" placeholder="Name"/>
                <label>EmailId</label> <input type="text" placeholder="EmailId"/>
                <label>Password</label> <input type="text" placeholder="Password"/>
                <label>City</label> <input type="text" placeholder="City"/>
                <label>Contact</label> <input type="text" placeholder="Contact"/>
                <button>Register</button>
                <button>Clear</button>
            </div>
        )
    }
}
