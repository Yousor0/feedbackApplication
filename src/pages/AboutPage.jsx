import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Card>
      <div>About This Project</div>
      <p>React app to leave feedback fro a product or service</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Card>
  );
}
