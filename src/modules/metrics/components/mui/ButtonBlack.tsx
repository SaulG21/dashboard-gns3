import Button from "@mui/material/Button";

export interface ButtonProps{
    onClick: (()=>void);
    label: string;
}

export default function BlackButton(props:ButtonProps) {
    return (
        <Button
            sx={{
                background: "#fff",
                textShadow: "initial",
                textAnchor: "middle",
                fontSize: "20px",
                boxShadow: "unset",
                "&:hover": {
                    background: "#3d3d3d",
                    color: "#fff"
                },
                paddingLeft:"10px",
                paddingRight:"10px"
            }}
            variant='text'
            size='large'
            onClick={props.onClick}
        >
            {props.label}
        </Button>
    )
}