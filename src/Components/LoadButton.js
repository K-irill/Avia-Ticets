import { useContext } from "react";
import { Context } from "../index";
import Button from "@mui/material/Button";

export default function LoadButtomModule() {
  const { ticets } = useContext(Context);

  const click = () => {
    ticets.activePage++;
    ticets.setTicetsPage();
  };

  return (
    <Button
      fullWidth={true}
      variant="contained"
      onClick={click}
      sx={{
        backgroundColor: "#2196F3",
        height: "50px",
        fontFamily: "Open Sans",
        fontWeight: 600,
        color: "#FFFFFF",
        borderColor: "#DFE5EC",
        fontSize: 12,

        "&:hover": {
          boxShadow: 3,
          backgroundColor: "#2196f3",
          borderColor: "#2196f3",
        },
      }}
    >
      Показать еще 5 билетов!
    </Button>
  );
}
