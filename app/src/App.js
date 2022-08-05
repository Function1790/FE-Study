import './App.css';
import Base_Templete from './memo/Base_Templete';

function App() {
  return (
    <div className='wrapper'>

      <div class="one-line">
        <div id="ONAIR" />
        <div id="onair-text">ONLINE</div>
      </div>

      <div class="toCenter">
        <div class="memo-index">
          <Base_Templete />
        </div>
      </div>

    </div>
  );
}

export default App;