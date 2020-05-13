import React from "react";
import preloader from "../../../assets/images/Triangles-12.5s-200px.svg";


const Preloader = (props) => {
    return  <div style={{backgroundColor: 'white'}} >
        {props.isFatching ?  <img src={preloader}/> : null}
    </div>
};
export default Preloader;