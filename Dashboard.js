import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap"; // Import React Bootstrap components

const AdminDashboard = () => {
  // State for managing levels
  const [levels, setLevels] = useState([]);
  const [newLevel, setNewLevel] = useState("");

  // Function to handle new level creation
  const handleNewLevel = () => {
    if (newLevel) {
      setLevels([...levels, newLevel]);
      setNewLevel("");
    }
  };

  return (
    <div className="admin-dashboard">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <h1>Admin Dashboard</h1>
        <div className="create-label">
          <h2>Create New Label</h2>
          <input
            type="text"
            placeholder="Enter label name"
            value={newLevel}
            onChange={(e) => setNewLevel(e.target.value)}
          />
          <button onClick={handleNewLevel}>Create Label</button>
        </div>
        <div className="labels">
          <h2>Labels</h2>
          <ul>
            {levels.map((level, index) => (
              <li key={index}>{level}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
