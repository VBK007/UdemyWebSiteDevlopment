import React,{Component} from "react";
import ReactDOM, { render } from "react-dom"

export class HeaderCompoent extends Component{
    constructor(name,url)
    {
        super()
        this.name =name;
        this.url =url;
    }
    render(){
        return (<div>
            <img src={this.url}/> 
            <h1>{this.url}</h1>
        </div>)
    }
}



export class LoginContentWithInputTagAndLabel extends Component {
    constructor(labelname,inputtype,placeholder) {
        super()
        this.labelname = labelname
        this.inputtype = inputtype
        this.placeholder = placeholder
    }

    render() {
        return(
        <div>
            <label>{this.labelname}</label> 
            <input type={this.inputtype} placeholder={this.placeholder}/>
        </div>
        )
    }

}


export class ButtonNormal extends Component
{
    constructor(buttontext,color,backcolor,width,height){
        super()
        this.buttontext =buttontext;
        this.color =color;
        this.backcolor =backcolor;
        this.width =width;
        this.height =height;
    }

    render(){
        return   React.createElement("button",{style:{
        color:this.color,width:this.width,
        height:this.height,backgroundColor:this.backcolor
       }})
    }

}






