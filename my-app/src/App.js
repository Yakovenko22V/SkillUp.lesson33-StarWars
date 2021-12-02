import React from "react";
import { BrowserRouter} from 'react-router-dom';
import '../src/app.scss';
import NavigationComponent from "./Components/NavigationComponent/NavigationComponent";

function App() {

  return (
    <div>
      <BrowserRouter>
          {<NavigationComponent/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
