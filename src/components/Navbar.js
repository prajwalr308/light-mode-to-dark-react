import React,{ Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component{
    static contextType = ThemeContext;
    render(){
        console.log(this.context);
       
        return(
            <ThemeContext.Consumer>{(context)=>{
                const {isLightTheme,light,dark}=context;
                const theme = isLightTheme ? light : dark;
                return(
                <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>
                    context app
                </h1>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contac</li>
                    
                </ul>
            
            </nav>
                
                )}}


            </ThemeContext.Consumer>
           
        )
            
        
    }
}
