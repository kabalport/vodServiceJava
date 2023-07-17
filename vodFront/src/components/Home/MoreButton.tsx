import React from 'react';
import Button from "@mui/material/Button";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



interface MoreButtonProps {
    buttonText: string;
    buttonColor?: string;
    buttonBgColor?: string;
    iconColor?: string;
}

const MoreButton: React.FC<MoreButtonProps> = ({ buttonText, buttonColor = "white", buttonBgColor = "#1F2437", iconColor = "yellow" }) => {
    return (
        <Button
            style={{
                width: "199.5px",
                height: "56px",
                color: buttonColor,
                fontSize: "18px",
                backgroundColor: buttonBgColor,
                borderRadius: "28px",
                padding: "6px 40px",
            }}
            endIcon={<ArrowUpwardIcon style={{ transform: "rotate(45deg)", color: iconColor }} />}
        >
            {buttonText}
        </Button>
    );
};

export default MoreButton;