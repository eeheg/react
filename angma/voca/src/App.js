import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

const router = createBrowserRouter([{
  path: "/",
  element: <Header />,
  errorElement: <EmptyPage />,
  children: [{
    path: "/",
    element: <DayList />,
    errorElement: <EmptyPage />
  }, {
    path: "/day/:day",
    element: <Day />,
    errorElement: <EmptyPage />
  }, {
    path: "/create_word",
    element: <CreateWord />,
    errorElement: <EmptyPage />
  }, {
    path: "/create_day",
    element: <CreateDay />,
    errorElement: <EmptyPage />
  }]
}])

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<DayList />} />
    //       <Route path="/day/:day" element={<Day />} />
    //       <Route path="/create_word" element={<CreateWord />} />
    //       <Route path: "/create_day" element={<CreateDay />} />
    //       <Route element={<EmptyPage />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
