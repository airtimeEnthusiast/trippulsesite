// PrivacyPolicy.js
import React from "react";
import "./Policy.css";
import { policyContent } from "./Policy.ts";

const Policy = () => {
    return (
        <div className="Policy">
            <h1>{policyContent.title}</h1>
            <p>{policyContent.description}</p>

            <h2>{policyContent.infotitle}</h2>
            <p>{policyContent.infoDescription}</p>

            <h2>{policyContent.dataIncludedTitle}</h2>
            <ul>
                {policyContent.dataIncluded.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <p>{policyContent.policyUpdateNotice}</p>
        </div>
    );
};

export default Policy;