import { IconContext } from "react-icons";

const IconButton = (props) => {

    return (
        <button
            onClick={props.onClick}
            className={`${props.className ? props.className : ""} link-button d-flex align-items-center`}
            type="button"
            style={{
                backgroundColor: props.background,
                color: props.color ? props.color : "black"
            }}
        >
            <IconContext.Provider
                value={{
                    size: "30px",
                    className: "react-icons",
                    color: props.iconColor ? props.iconColor : "black"
                }}
            >
                {props.icon}
            </IconContext.Provider>
            <div style={{ paddingLeft: props.icon ? 10 : 0 }}>{props.text}</div>
        </button>
    );


}

export default IconButton;