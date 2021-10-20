import React from "react";

const Header = (props) => {
    return (
        <div className ="header">
            <h1>High Score:  {props.country}</h1>
            <hr className="tableBorder border-dark" />
        </div>
    )
}

Header.defaultProps ={
    country: "Country",
};

export default Header;