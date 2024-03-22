import { OverlayTrigger, Tooltip, Image } from "react-bootstrap";

const SkillsCircle = (props) => {
    return (
        <OverlayTrigger
            placement="bottom"
            overlay={
                <Tooltip><strong>{props.skill.name}</strong></Tooltip>
            }
        >
            <div className="skill-circle" style={props.small ? { height: 65, width: 65 } : {}}>
                <Image
                    className="skills-image"
                    src={props.skill.img}
                    alt={props.skill.name}
                    fluid
                ></Image>
            </div>
        </OverlayTrigger>
    );
}

export default SkillsCircle;