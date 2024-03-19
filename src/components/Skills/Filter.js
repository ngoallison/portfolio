import { useEffect } from "react";
import IconButton from "../IconButton";

function Filter({ handleClick, active }) {

    const items = ["All", "Languages and Databases", "Frameworks", "Other Tools"]
    return (
        <div className="d-flex gap-3" style={{ marginBottom: "1rem" }}>
            {items.map((item) => (
                <IconButton
                    className={active === item.toLowerCase() && "link-button-active"}
                    onClick={() => handleClick(item.toLowerCase())}
                    text={item}
                >
                </IconButton>
            ))}
        </div>
    );
}

export default Filter;