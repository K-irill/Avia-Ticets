import { useContext } from "react";
import { Context } from "../index";
import { Button, ButtonGroup } from "@mui/material";

export default function ButtonGroupModul() {
  const { ticets } = useContext(Context);

  const cheapTicetsSort = () => {
    if (!ticets.arrTicetsFilter.length) {
      ticets.arrTicetsFilter = [...ticets._ticet];
    }
    ticets.activePage = 1;

    ticets.arrTicetsFilter.sort((a, b) => {
      return a.price - b.price;
    });

    ticets.setActivFilter(true);
    ticets.setTicetPerPage([]);
    ticets.setTicetsPage();
  };

  const fastAirTicets = () => {
    if (!ticets.arrTicetsFilter.length) {
      ticets.arrTicetsFilter = [...ticets._ticet];
    }
    ticets.activePage = 1;

    ticets.arrTicetsFilter.sort((a, b) => {
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
      );
    });

    ticets.setActivFilter(true);
    ticets.setTicetPerPage([]);
    ticets.setTicetsPage();
  };

  const optimalAirTicets = () => {
    if (!ticets.arrTicetsFilter.length) {
      ticets.arrTicetsFilter = [...ticets._ticet];
    }
    ticets.activePage = 1;

    ticets.arrTicetsFilter.sort((a, b) => {
      return (
        a.price +
        a.segments[0].duration +
        a.segments[1].duration -
        (b.price + b.segments[0].duration + b.segments[1].duration)
      );
    });

    ticets.setActivFilter(true);
    ticets.setTicetPerPage([]);
    ticets.setTicetsPage();
  };

  return (
    <ButtonGroup
      fullWidth={true}
      variant="outlined"
      color="inherit"
      sx={{
        backgroundColor: "#FFFFFF",
        mb: "20px",
        height: "50px",
      }}
    >
      <Button
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 600,
          borderColor: "#DFE5EC",
          fontSize: 12,

          "&:hover": {
            fontWeight: "regular",
            boxShadow: 3,
            color: "#FFFFFF",
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
          },
        }}
        onClick={cheapTicetsSort}
      >
        Самый дешевый
      </Button>
      <Button
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 600,
          borderColor: "#DFE5EC",
          fontSize: 12,

          "&:hover": {
            fontWeight: "regular",
            boxShadow: 3,
            color: "#FFFFFF",
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
          },
        }}
        onClick={fastAirTicets}
      >
        Самый быстрый
      </Button>
      <Button
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 600,
          borderColor: "#DFE5EC",
          fontSize: 12,

          "&:hover": {
            fontWeight: "regular",
            boxShadow: 3,
            color: "#FFFFFF",
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
          },
        }}
        onClick={optimalAirTicets}
      >
        Оптимльный
      </Button>
    </ButtonGroup>
  );
}
