"use client";
import React from "react";

function TaskBar({ initialTime = new Date() }) {
  const [time, setTime] = useState(initialTime);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    {
      label: "WolfOS",
      icon: "fa-paw",
      submenu: [
        { label: "About WolfOS", href: "#about" },
        { label: "Check for Updates", href: "#" },
        { label: "App Store", href: "#" },
        { type: "separator" },
        { label: "Downloads", href: "#downloads" },
      ],
    },
    {
      label: "Features",
      icon: "fa-star",
      href: "#features",
    },
    {
      label: "Roadmap",
      icon: "fa-road",
      href: "#roadmap",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="flex items-center h-10">
        <div className="flex items-center">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a
                href={item.href}
                className="flex items-center px-4 h-10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <i className={`fas ${item.icon} mr-2`}></i>
                {item.label}
              </a>

              {item.submenu && activeMenu === index && (
                <div className="absolute top-full left-0 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-b-lg overflow-hidden">
                  {item.submenu.map((subItem, subIndex) =>
                    subItem.type === "separator" ? (
                      <hr key={subIndex} className="border-white/10 my-1" />
                    ) : (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {subItem.label}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ml-auto flex items-center pr-4">
          <div className="flex items-center space-x-4 text-white/80">
            <div className="flex items-center">
              <i className="fas fa-wifi mr-2"></i>
              <i className="fas fa-battery-three-quarters"></i>
            </div>
            <div>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskBarStory() {
  return (
    <div className="min-h-screen bg-gray-900">
      <TaskBar initialTime={new Date("2025-01-01T12:00:00")} />
    </div>
  );
}

export default TaskBar;