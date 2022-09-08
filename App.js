import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./stories";
import { useContext } from "react";
import {AppContext } from "./context";

cosnt App = () => {
  const data = useContext(AppContext);
  return(
<> 
<div>Welcome in my house{data}</div>
<Search />
<Pagination />
<Stories />
</>

  );
};

export default App;