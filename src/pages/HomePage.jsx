import React, { useState } from "react";
import Board from "../components/Board.jsx"
import Game from "../components/Game.jsx";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <Game />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// onClick={() => setCount((count) => count + 1)}