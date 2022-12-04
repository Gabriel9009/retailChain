import { Routes, Route } from "react-router-dom"
//mport { web3Provider } from "./webContext"
import Signin from "./sign-in"
import Producer from "./producer"
import Warehouse from "./warehouse"
import Form from "./form"

function App() {
  return (
    <div className="App">
      {/* <web3Provider> */}
          <Routes>
            <Route exact path="/" element={<Signin/>} />
            <Route path="/producer" element={<Producer/>}>
            <Route path="/producer/:isform" element={<Form />}/>
            </Route>
            <Route path="/warehouse" element={<Warehouse/>}>
            <Route path="/warehouse/:isform" element={<Form />}/>
            </Route>
          </Routes>
      {/* </web3Provider> */}
    </div>
  );
}

export default App;
