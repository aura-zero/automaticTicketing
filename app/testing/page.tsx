import { Button } from "@nextui-org/react";
import { Card } from "shadcn";

const Example = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h1>My App</h1>
      <Button color="primary" onClick={handleClick}>
        NextUI Button
      </Button>
      <Card className="card">
        <Card.Header>
          <h3>Shadcn Card</h3>
        </Card.Header>
        <Card.Body>
          <p>This is a card body.</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Example;

// Add CSS for styling
// styles.css or in a styled-components file
/*
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.card {
  width: 300px;
}
*/
