import React from "react";
import viteLogo from "@assets/vite.svg";
import reactLogo from "@assets/react.svg";
import typesciptLogo from "@assets/typescript.svg";
import "@/Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img src={typesciptLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      <div>
        <p>
          Edit <code>src/routes/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite React and TypeScript logos to learn more</p>
    </div>
  );
};

export default Home;
