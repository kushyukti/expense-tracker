import { useMemo, useState } from "react";
import "./app.css";
import Navigation from "./components/Navigation/Navigation";
import Orb from "./components/Orb/Orb";
import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Incomes from "./components/Incomes/Incomes";

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;

      case 4:
        return <Expenses />;

      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <>
      <div className="AppStyled">
        {orbMemo}
        <div className="main">
          <Navigation active={active} setActive={setActive} />
          <div className="main__container">{displayData()}</div>
        </div>
      </div>
    </>
  );
}

export default App;
