import * as React from "react";
import { useNavigate } from "react-router";
import { v4 } from "uuid";

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(v4())}>Create new sandbox</button>
    </div>
  );
}
