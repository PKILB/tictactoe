import React, { useState } from "react";
import X from "../components/X.jsx"

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <X />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// onClick={() => setCount((count) => count + 1)}