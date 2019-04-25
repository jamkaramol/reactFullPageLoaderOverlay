import React from "react";
import "./Loader.css";
import PropTypes from "prop-types";

function Loader({
    text = "Loading",
    show = false,
    fillIn = true,
    design = 0,
    centerBorder = "red",
    leftBorder = "green",
    rightBorder = "yellow"
}) {
    if (!show) {
        return "";
    }
    let fillInClass = "";
    let designClass = "";
    let left_1 = "left-1 left-1-animation";
    let left_2 = "left-2 left-2-animation";
    let right_2 = "right-2 right-2-animation";
    let right_1 = "right-1 right-1-animation"; 
    let additionalCirclesJSX = "";
    let design1JSX = "";
    if (fillIn) {
        fillInClass = "fillIn";
    }
    if (Number(design) === 1) {
        design1JSX = (<React.Fragment>
            <div className={"left-3 left-3-animation" + " " + fillInClass + " " + designClass} style={{ borderColor: leftBorder }} > </div>
            <div className={"left-4 left-4-animation" + " " + fillInClass + " " + designClass} style={{ borderColor: leftBorder }} > </div>
            <div className={"right-3 right-3-animation" + " " + fillInClass + " " + designClass} style={{ borderColor: rightBorder }} > </div>
            <div className={"right-4 right-4-animation" + " " + fillInClass + " " + designClass} style={{ borderColor: rightBorder }}> </div>
        </React.Fragment>);
    }
    if (Number(design) === 2)
    {
        designClass = "fixedWidth";
    }
    if (Number(design) === 3) {
        left_1 = "left-1 left-1-animation-design-3 fixedWidth";
        left_2 = "left-2 left-2-animation-design-3 fixedWidth";
        right_1 = "right-1 right-1-animation-design-3 fixedWidth";
        right_2 = "right-2 right-2-animation-design-3 fixedWidth";
    }
    if (Number(design) !== 0) {
        additionalCirclesJSX = (<React.Fragment>
            <div className={left_1 + " " + fillInClass + " " + designClass} style={{ borderColor: leftBorder }} > </div>
            <div className={left_2 + " " + fillInClass + " " + designClass} style={{ borderColor: leftBorder }}> </div>
            <div className={right_2 + " " + fillInClass + " " + designClass} style={{ borderColor: rightBorder }}> </div>
            <div className={right_1 + " " + fillInClass + " " + designClass} style={{ borderColor: rightBorder }}> </div>
            {design1JSX}
        </React.Fragment>);
    }
    

    return (
        <React.Fragment>
            <div className="react-full-page-loader-overlay">
                <div className="react-loader-container-main fixedWidth" style={{borderColor:centerBorder}}> 
                    <p className="react-loader-container-main-textStyle">
                    {text}
                    </p>
                </div>
                {additionalCirclesJSX}
            </div>
        </React.Fragment>
    )
};

Loader.propTypes = {
    text : PropTypes.string,
    show : PropTypes.bool,
    fillIn : PropTypes.bool,
    design: PropTypes.number,
    centerBorder: PropTypes.string,
    leftBorder: PropTypes.string,
    rightBorder: PropTypes.string 
}

export default Loader;