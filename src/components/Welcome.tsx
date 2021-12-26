import * as React from "react";
import { useNavigate } from "react-router";
import { v4 } from "uuid";

export function WelcomePage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(v4());
  }, []);

  return <div>Create new p5.js collaboration sandbox</div>;
}
