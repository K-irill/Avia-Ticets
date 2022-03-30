import { observer } from "mobx-react-lite";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { getTicets, getId } from "../../http/ticetsApi";
import "./ticets.scss";

const Ticets = observer(() => {
  const { ticets } = useContext(Context);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getId().then((data) => {
      setId((prevId) => (prevId = data.searchId));
    });
  }, []);

  useEffect(() => {
    if (id === null) return;
    getTicets(id)
      .then((data) => {
        ticets.setTicet(data.tickets);
        ticets.setTicetsPage();
      })
      .catch(() => {
        setAlert(true);
      })
      .finally(setLoading(false));
  }, [id, ticets]);

  const minutesToHours = (mins, flightTime) => {
    let destinationTime;

    if (flightTime !== null) {
      let totalTime = mins + flightTime;
      let hours =
        Math.trunc(totalTime / 60) >= 24
          ? Math.trunc(totalTime / 60) - 24
          : Math.trunc(totalTime / 60) - 24 >= 24
          ? Math.trunc(totalTime / 60) - 24
          : Math.trunc(totalTime / 60);
      let minutes = totalTime % 60;

      let editHours = hours < 10 ? `0${hours}` : `${hours}`;
      let editMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

      destinationTime = `${editHours}:${editMinutes}`;
    }

    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;

    let editHours = hours < 10 ? `0${hours}` : `${hours}`;
    let editMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const finalTime = `${editHours}:${editMinutes}`;

    return {
      timeDuration: `${hours}ч ${minutes}м`,
      timeOrigin: finalTime,
      timeDestination: destinationTime,
    };
  };

  const priceGap = (price) => {
    let priceToString = price.toString();
    return priceToString.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ");
  };

  const parseDateTime = (date) => {
    let dateTime = new Date(date);
    let hours = dateTime.getUTCHours();
    let minutes = dateTime.getUTCMinutes();

    let inMinutes = hours * 60 + minutes;

    return {
      inMinutes: inMinutes,
    };
  };

  let ticetList = ticets.ticetPerPage.map((el) => {
    return (
      <div className="ticets" key={Math.random() * 1000}>
        <div className="header-logo-price">
          <span>{priceGap(el.price)} Р</span>
          <img
            src={`https://pics.avs.io/99/36/${el.carrier}.png`}
            alt="logo-company"
          ></img>
        </div>
        <div className="departure">
          <div className="city-time">
            <span className="header-departure">
              {el.segments[0].origin} – {el.segments[0].destination}
            </span>
            <span className="time">
              {
                minutesToHours(
                  parseDateTime(el.segments[0].date).inMinutes,
                  null
                ).timeOrigin
              }
              –
              {
                minutesToHours(
                  parseDateTime(el.segments[0].date).inMinutes,
                  el.segments[0].duration
                ).timeDestination
              }
            </span>
          </div>
          <div className="travel-time">
            <span className="header-departure">В пути</span>
            <span className="time">
              {minutesToHours(el.segments[0].duration).timeDuration}
            </span>
          </div>
          <div className="number-of-transfers">
            <span className="header-departure">
              {el.segments[0].stops.length === 0
                ? "пересадка"
                : el.segments[0].stops.length < 2
                ? `${el.segments[0].stops.length} пересадка`
                : `${el.segments[0].stops.length} пересадки`}
            </span>
            <span className="time">
              {el.segments[0].stops.join() === ""
                ? "Без пересадок"
                : el.segments[0].stops.join()}
            </span>
          </div>
        </div>
        <div className="return-flight">
          <div className="city-time">
            <span className="header-departure">
              {el.segments[1].origin} – {el.segments[1].destination}
            </span>
            <span className="time">
              {
                minutesToHours(
                  parseDateTime(el.segments[1].date).inMinutes,
                  null
                ).timeOrigin
              }
              –
              {
                minutesToHours(
                  parseDateTime(el.segments[1].date).inMinutes,
                  el.segments[1].duration
                ).timeDestination
              }
            </span>
          </div>
          <div className="travel-time">
            <span className="header-departure">В пути</span>
            <span className="time">
              {minutesToHours(el.segments[1].duration).timeDuration}
            </span>
          </div>
          <div className="number-of-transfers">
            <span className="header-departure">
              {el.segments[1].stops.length === 0
                ? "пересадка"
                : el.segments[1].stops.length < 2
                ? `${el.segments[1].stops.length} пересадка`
                : `${el.segments[1].stops.length} пересадки`}
            </span>
            <span className="time">
              {el.segments[1].stops.join() === ""
                ? "Без пересадок"
                : el.segments[1].stops.join()}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ticets-list">
      {loading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : alert ? (
        <Alert severity="error" sx={{ mb: "20px" }}>
          Произошла ошибка! Попробуйте ещё раз
        </Alert>
      ) : (
        ticetList
      )}
    </div>
  );
});

export default Ticets;
