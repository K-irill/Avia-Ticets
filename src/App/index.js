import { observer } from "mobx-react-lite";
import ButtonGroupModul from "../Components/ButtonGroup";
import CheckboxSearch from "../Components/CheckboxSearch";
import LoadButtomModule from "../Components/LoadButton";
import Ticets from "../Components/Ticets";

const App = observer(() => {
  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <img src="/images/Logo.png" width={60} height={60} alt="Logo" />
        </div>
      </header>
      <div className="content">
        <div className="navbar-list">
          <h4>Количество пересадок</h4>
          <CheckboxSearch />
        </div>
        <div className="ticets-navbar-buttons">
          <div className="navbar-buttons">
            <ButtonGroupModul />
          </div>
          <Ticets />
          <div className="load-ticets">
            <LoadButtomModule />
          </div>
        </div>
      </div>
    </div>
  );
});

export default App;
