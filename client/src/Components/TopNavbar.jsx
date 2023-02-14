import { Navbar, Button } from "react-bootstrap";

const TopNavbar = ({ handleRefresh, handlePostNote }) => {
  return (
    <Navbar bg="light" expand="lg" style={{ justifyContent: "space-between" }}>
      <Navbar.Brand
        style={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          paddingLeft: "20px",
        }}
      >
        <span style={{ marginLeft: "10px" }}>My Notes</span>
      </Navbar.Brand>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "20px",
        }}
      >
        <Button variant="outline-primary" onClick={handleRefresh}>
          Refresh
        </Button>
        <Button
          variant="primary"
          onClick={handlePostNote}
          style={{ marginLeft: "10px" }}
        >
          Post a Note
        </Button>
      </div>
    </Navbar>
  );
};

export default TopNavbar;
