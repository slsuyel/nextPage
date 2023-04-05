import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Spinners() {
  return (
    <div className="my-5 text-center w-100">
      <Button variant="primary" disabled className="mx-auto">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
}

export default Spinners;
