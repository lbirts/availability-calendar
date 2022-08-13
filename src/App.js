import Calendar from './components/Calendar';
import './App.css';

function App() {
  const handleStickyScroll = (e) => {console.log(e)}
  return (
    <div className="App">
      <header>
        <div id="logo">
          <span className="icon">date_range</span>
          <span>
            react<b>calendar</b>
          </span>
        </div>
      </header>
      <main onScroll={handleStickyScroll}>
        <Calendar />
      </main>
    </div>
  );
}

export default App;
