"use client";
import React from "react";
import TaskBar from "../components/task-bar";

function MainComponent() {
  const [features, setFeatures] = useState([]);
  const [team, setTeam] = useState([]);
  const [roadmap, setRoadmap] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [featuresRes, teamRes, roadmapRes] = await Promise.all([
          fetch("/api/get-features", { method: "POST" }),
          fetch("/api/get-team", { method: "POST" }),
          fetch("/api/get-roadmap", { method: "POST" }),
        ]);

        if (!featuresRes.ok || !teamRes.ok || !roadmapRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [featuresData, teamData, roadmapData] = await Promise.all([
          featuresRes.json(),
          teamRes.json(),
          roadmapRes.json(),
        ]);

        setFeatures(featuresData.features || []);
        setTeam(teamData.team || []);
        setRoadmap(roadmapData.roadmap || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load some content");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <TaskBar />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-10"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Unleash Your Projects with WolfOS
          </h1>
          <img
            alt="WolfOS download statistics from SourceForge showing total downloads"
            src="https://img.shields.io/sourceforge/dt/wolfos?style=for-the-badge&color=white"
            className="mx-auto mb-6"
          />
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            A powerful, lightweight, and developer-friendly OS based on the
            WolfKernel Linux Fork, designed for modern creators and innovators
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://sourceforge.net/projects/wolfos/files/latest/download"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 md:px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Download WolfOS for x86_64
            </a>
            <a
              href="https://sourceforge.net/projects/cactusrom/files/latest/download"
              className="bg-white/10 px-6 md:px-8 py-3 rounded-full hover:bg-white/20 transition"
            >
              Download CactusROM for PinePhone
            </a>
          </div>
        </div>
      </section>

      {error && (
        <div className="bg-red-500/10 text-red-500 p-4 text-center">
          {error}
        </div>
      )}

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About WolfOS
          </h2>
          <div className="max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Overview</h3>
                <p className="text-white/70">
                  WolfOS is designed for developers, offering a simple
                  configuration system that lets you install all the packages
                  you need using a single config file after installation.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Installation
                </h3>
                <ol className="list-decimal list-inside text-white/70">
                  <li>Download the ISO from the Sourceforge Mirror</li>
                  <li>Create a bootable USB drive using your preferred tool</li>
                  <li>Boot your computer from the USB drive</li>
                  <li>Follow the on-screen instructions to install WolfOS</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmap.map((item) => (
              <div key={item.id} className="bg-black/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
                <span className="inline-block mt-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  {item.phase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;