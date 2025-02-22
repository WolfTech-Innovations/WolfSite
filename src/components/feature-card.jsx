"use client";
import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-black/50 backdrop-blur-lg rounded-xl p-6 hover:transform hover:-translate-y-2 transition duration-300">
      <div className="text-4xl mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}

function FeatureCardStory() {
  return (
    <div className="bg-gray-900 p-8 space-y-8">
      <FeatureCard
        icon="fa-rocket"
        title="Fast Performance"
        description="Lightning-quick response times and smooth user experience"
      />

      <FeatureCard
        icon="fa-shield-alt"
        title="Enhanced Security"
        description="Advanced protection for your digital assets"
      />

      <FeatureCard
        icon="fa-code"
        title="Clean Code"
        description="Well-structured and maintainable codebase"
      />
    </div>
  );
}

export default FeatureCard;