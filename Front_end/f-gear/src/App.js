import './App.css';
import GlobalStyle from './Components/GlobalStyle/GlobalStyle.js';
import LoginPage from './Page/LoginPage/LoginPage';
function App() {
  return (
    <div className="App">
      <GlobalStyle>
        <LoginPage />
      </GlobalStyle>
    </div>
  );
}

export default App;
