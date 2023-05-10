import "./App.css";
import { Form } from "./components/Form/Form";

function App() {
  const bookingInfo = {
    tower: {
      name: "Башня",
      value: ["A", "B"],
    },
    floor: {
      name: "Этаж",
      value: [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27,
      ],
    },
    meetingRoom: {
      name: "Переговорная",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  };

  return (
    <div className="App">
      <Form bookingInfo={bookingInfo} />
    </div>
  );
}

export default App;
