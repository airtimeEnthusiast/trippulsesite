// About.js
import React from "react";
import appStoreImage from "../app-store-badge.png";
import { aboutContent } from "./About.ts";
import "./About.css"

function About() {
  return (
    <main>
      <h2 className="title">{aboutContent.title}</h2>
      <p>{aboutContent.description}</p>
      <section className="app-store-link">
        <a
          href="https://apps.apple.com"
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

      <section className="screenshots" id="about">
        <div className="screenshot-container">
          {aboutContent.screenshots.map((src, index) => (
            <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="screenshot" />
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
