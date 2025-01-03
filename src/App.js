import React from "react";
import "./App.css";
import logo from "./logo.png"; // Add your uploaded logo to the src folder and reference it
import appStoreImage from "./app-store-badge.png"; // Add your App Store badge image to the src folder and reference it
import screenshot1 from "./screenshot1.png";
import screenshot2 from "./screenshot2.png"; 
import screenshot3 from "./screenshot3.png"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="Trip Pulse Logo" />
          <h1>Trip Pulse</h1>
        </div>
      </header>

      <main>
        <section className="description">
          <h2>About Trip Pulse</h2>
          <p>
          Trip Pulse simplifies your mileage tracking process by allowing 
          you to effortlessly generate accurate mileage invoices in just 
          a few taps. Whether you're managing expenses for work, planning 
          trips, or keeping tabs on your travel history, Trip Pulse ensures
          all your mileage data is recorded, organized, and ready to share.
           With a user-friendly interface and seamless integration with mapping 
           tools, tracking your trips has never been more convenient.
          </p>
        </section>

        <section className="screenshots">
          <div className="screenshot-container">
            <img src={screenshot1} alt="Screenshot 1" className="screenshot" />
            <img src={screenshot2} alt="Screenshot 2" className="screenshot" />
            <img src={screenshot3} alt="Screenshot 3" className="screenshot" />
          </div>
        </section>

        <section className="app-store-link">
          <h2>Get the App</h2>
          <a
            href="https://apps.apple.com" // Replace with your actual App Store link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStoreImage}
              alt="Download on the App Store"
              className="app-store-badge"
            />
          </a>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:trippulsecontact@gmail.com">trippulsecontact@gmail.com</a></p>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Trip Pulse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
