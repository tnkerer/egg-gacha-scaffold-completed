import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <main>
    <header>
      <div className="connect">Connect wallet</div>
    </header>
    <div className="app">
      <div className="wrapper">
        <div className="infosContainer">
          <div className="infos">
            <span>MY EGT TOKENS: 0</span>
            <span>MY EGGS: 0</span>
          </div>
          <div className="infosButton">DROP ME MORE EGT!</div>
        </div>
        <div className="mintContainer">
          <div className="left">
            <img src="/leftArrowColored.svg" alt="Left Arrow" />
          </div>

          <div className="center">
            <div className="count">0/0</div>
            <div className="nft">
              <img src="/interrogation.svg" alt="No NFT" />
            </div>
            <div className="mintButton">DROP ME MORE EGT!</div>
          </div>

          <div className="right">
            <img src="/rightArrowColored.svg" alt="Left Arrow" />
          </div>
        </div>
      </div>
    </div>
  </main>
);
