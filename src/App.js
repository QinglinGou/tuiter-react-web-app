import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
          {/* catch-all route */}
          <Route path="*" element={<Navigate to="/tuiter" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
