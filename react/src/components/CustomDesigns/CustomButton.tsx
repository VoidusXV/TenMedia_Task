import React from "react";
import { Button } from "react-bootstrap";
import { NavTopColor } from "../../constants/Colors";

interface ICustomButton {
    onClick?: any;
    style?: React.CSSProperties;
    Title?: string;
}

const CustomButton = ({ onClick, style, Title }: ICustomButton) => {
    return (
        <Button
            onClick={onClick}
            style={{
                backgroundColor: NavTopColor,
                borderColor: "#ffffff40",
                ...style,
            }}
        >
            {Title}
        </Button>
    );
};

export default CustomButton;
