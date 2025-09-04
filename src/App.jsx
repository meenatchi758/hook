import { useState } from "react";
import CounterDemo from "./components/CounterDemo";
import ToggleDemo from "./components/Toggle";
import LocalStorageDemo from "./components/LocalStorageDemo";
import FetchDemo from "./components/FetchDemo";
import InputDemo from "./hooks/useInput";
import DebounceDemo from "./components/Debounce";
import PreviousDemo from "./components/PreviousDemo";
import HoverDemo from "./components/HoverDemo";
import TitleDemo from "./components/TitleDemo.jsx";
import TimeoutDemo from "./components/TimeoutDemo";
import ClipboardDemo from "./components/ClipboardDemo";
import MediaQueryDemo from "./components/MediaQueryDemo";
import OnlineStatusDemo from "./components/OnlineStatusDemo";
import GeolocationDemo from "./components/GeolocationDemo";
import ThemeDemo from "./components/ThemeDemo";


const demos = [
  { name: "Counter", component: <CounterDemo /> },
  { name: "Toggle", component: <ToggleDemo /> },
  { name: "LocalStorage", component: <LocalStorageDemo /> },
  { name: "Fetch", component: <FetchDemo /> },
    { name: "Input", component: <InputDemo /> },
      { name: "Debounce Hook", component: <DebounceDemo /> },
   { name: "Previous Hook", component: <PreviousDemo /> },
  { name: "Hover Hook", component: <HoverDemo /> },
  { name: "Title Hook", component: <TitleDemo /> },
  { name: "Timeout Hook", component: <TimeoutDemo /> },
  { name: "Clipboard Hook", component: <ClipboardDemo /> },
  { name: "MediaQuery Hook", component: <MediaQueryDemo /> },
  { name: "OnlineStatus Hook", component: <OnlineStatusDemo /> },
  { name: "Geolocation Hook", component: <GeolocationDemo /> },
  { name: "Theme Hook", component: <ThemeDemo /> },
];

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <h1>Custom Hooks Playground</h1>

      <div className="tabs">
        {demos.map((demo, idx) => (
          <button
            key={idx}
            className={`tab ${active === idx ? "active" : ""}`}
            onClick={() => setActive(idx)}
          >
            {demo.name}
          </button>
        ))}
      </div>

      <div className="card">
        {demos[active].component}
      </div>
    </div>
  );
}
