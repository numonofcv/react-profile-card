import "./App.css";
import Avatar from "./Components/Avatar/Avatar";
import Intro from "./Components/Intro/Intro";
import SkilList from "./Components/SkilList/SkillList";
function App() {
    return (
        <div className="App">
            <div className="app-header">
                <div className="card">
                    <Avatar />
                    <div className="info">
                        <Intro />
                        <SkilList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
