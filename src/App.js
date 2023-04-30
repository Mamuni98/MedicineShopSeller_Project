import AddMedicine from "./Components/AddMedicine";
import { ListProvider } from "./Store/list-context";
import MedicineLists from "./Components/MedicineLists";

function App() {
  return (
    <ListProvider>
      <AddMedicine/>
      <MedicineLists/>
    </ListProvider>
  );
}

export default App;