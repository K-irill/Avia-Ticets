import React, { useContext, useState, useEffect, useCallback } from "react";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { Context } from "../index";

export default function CheckboxSearch() {
  const { ticets } = useContext(Context);
  const [filter, setFilter] = useState({
    all: false,
    without: false,
    one: false,
    two: false,
    three: false,
  });

  const filteredTicets = useCallback(() => {
    const myTicets = [...ticets.ticet];
    ticets.arrTicetsFilter = [];

    return myTicets.filter((current) => {
      if (filter.all) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
        return true;
      }
      if (
        filter.without &&
        current.segments[0].stops.length === 0 &&
        current.segments[1].stops.length === 0
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.without &&
        filter.one &&
        (current.segments[0].stops.length === 0
          ? current.segments[0].stops.length === 0
          : current.segments[0].stops.length === 1) &&
        (current.segments[1].stops.length === 0
          ? current.segments[1].stops.length === 0
          : current.segments[1].stops.length === 1)
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.without &&
        filter.two &&
        (current.segments[0].stops.length === 0
          ? current.segments[0].stops.length === 0
          : current.segments[0].stops.length === 2) &&
        (current.segments[1].stops.length === 0
          ? current.segments[1].stops.length === 0
          : current.segments[1].stops.length === 2)
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.without &&
        filter.three &&
        (current.segments[0].stops.length === 0
          ? current.segments[0].stops.length === 0
          : current.segments[0].stops.length === 3) &&
        (current.segments[1].stops.length === 0
          ? current.segments[1].stops.length === 0
          : current.segments[1].stops.length === 3)
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.one &&
        current.segments[0].stops.length === 1 &&
        current.segments[1].stops.length === 1
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.one &&
        filter.two &&
        (current.segments[0].stops.length === 1
          ? current.segments[0].stops.length === 1
          : current.segments[0].stops.length === 2) &&
        (current.segments[1].stops.length === 1
          ? current.segments[1].stops.length === 1
          : current.segments[1].stops.length === 2)
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.one &&
        filter.three &&
        (current.segments[0].stops.length === 1
          ? current.segments[0].stops.length === 1
          : current.segments[0].stops.length === 3) &&
        (current.segments[1].stops.length === 1
          ? current.segments[1].stops.length === 1
          : current.segments[1].stops.length === 3)
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.two &&
        current.segments[0].stops.length === 2 &&
        current.segments[1].stops.length === 2
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.two &&
        filter.three &&
        (current.segments[0].stops.length === 2
          ? current.segments[0].stops.length === 2
          : current.segments[0].stops.length === 3) &&
        (current.segments[1].stops.length === 2
          ? current.segments[1].stops.length === 2
          : current.segments[1].stops.length === 3)
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      if (
        filter.three &&
        current.segments[0].stops.length === 3 &&
        current.segments[1].stops.length === 3
      ) {
        ticets.arrTicetsFilter.push(current);
        ticets.setActivFilter(true);
        ticets.setTicetPerPage([]);
        ticets.setTicetsPage();
      }
      return ticets.setActivFilter(false);
    });
  }, [filter, ticets]);

  useEffect(() => {
    filteredTicets();
  }, [filter, filteredTicets]);

  const allOptionsChecked = (ev) => {
    if (!filter.all) {
      setFilter({
        all: true,
        without: true,
        one: true,
        two: true,
        three: true,
      });
    } else {
      setFilter({
        all: false,
        without: false,
        one: false,
        two: false,
        three: false,
      });
    }
  };

  const nonStopChecked = (ev) => {
    if (filter.all) {
      setFilter((prevFilter) => {
        prevFilter.all = false;
      });
    }

    setFilter({
      ...filter,
      without: !filter.without,
    });
  };

  const oneTransplants = (ev) => {
    if (filter.all) {
      setFilter((prevFilter) => {
        prevFilter.all = false;
      });
    }

    setFilter({
      ...filter,
      one: !filter.one,
    });
  };

  const twoTransplants = (ev) => {
    if (filter.all) {
      setFilter((prevFilter) => {
        prevFilter.all = false;
      });
    }

    setFilter({
      ...filter,
      two: !filter.two,
    });
  };

  const threeTransplants = (ev) => {
    if (filter.all) {
      setFilter((prevFilter) => {
        prevFilter.all = false;
      });
    }

    setFilter({
      ...filter,
      three: !filter.three,
    });
  };

  return (
    <FormGroup sx={{ width: 232, m: 0 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={filter.without && filter.one && filter.two && filter.three}
            onChange={allOptionsChecked}
            checkedIcon={<CheckBoxOutlined sx={{ color: "#2196F3" }} />}
            sx={{ color: "#9ABBCE", ml: "20px" }}
          />
        }
        label="Все"
        sx={{
          m: 0,
          height: 40,

          "&:hover": {
            bgcolor: "#F1FCFF",
          },
        }}
        onChange={(event) => {
          console.log("1 variant", event);
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={filter.without}
            onChange={nonStopChecked}
            checkedIcon={<CheckBoxOutlined sx={{ color: "#2196F3" }} />}
            sx={{ color: "#9ABBCE", ml: "20px" }}
          />
        }
        label="Без пересадок"
        sx={{
          m: 0,
          height: 40,

          "&:hover": {
            bgcolor: "#F1FCFF",
          },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={filter.one}
            onChange={oneTransplants}
            checkedIcon={<CheckBoxOutlined sx={{ color: "#2196F3" }} />}
            sx={{ color: "#9ABBCE", ml: "20px" }}
          />
        }
        label="1 пересадка"
        sx={{
          m: 0,
          height: 40,

          "&:hover": {
            bgcolor: "#F1FCFF",
          },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={filter.two}
            onChange={twoTransplants}
            checkedIcon={<CheckBoxOutlined sx={{ color: "#2196F3" }} />}
            sx={{ color: "#9ABBCE", ml: "20px" }}
          />
        }
        label="2 пересадки"
        sx={{
          m: 0,
          height: 40,

          "&:hover": {
            bgcolor: "#F1FCFF",
          },
        }}
        onChange={() => {
          console.log("4 variant");
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={filter.three}
            onChange={threeTransplants}
            checkedIcon={<CheckBoxOutlined sx={{ color: "#2196F3" }} />}
            sx={{ color: "#9ABBCE", ml: "20px" }}
          />
        }
        label="3 пересадки"
        sx={{
          m: 0,
          height: 40,

          "&:hover": {
            bgcolor: "#F1FCFF",
          },
        }}
        onChange={() => {
          console.log("5 variant");
        }}
      />
    </FormGroup>
  );
}
