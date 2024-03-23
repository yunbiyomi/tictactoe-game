import { Route, Routes } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import HomePage from './pages/HomePage'
import GameSettingPage from './pages/GameSettingPage'
import GamePage from './pages/GamePage'
import GameRecordPage from './pages/GameRecord'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/setting" element={<GameSettingPage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="/record" element={<GameRecordPage />}></Route>
      </Routes>
    </>
  );
}
export default App;