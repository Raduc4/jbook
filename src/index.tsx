import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";

import "bulmaswatch/superhero/bulmaswatch.min.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
