import React from "react";

const OurWorkPage = () => {
  // ✅ Corrected paths: remove "public/" and start with "/"
  const gallery = [
    {
      name: "At work",
      url: "/uploads/at work.jpeg", // ✅ now served correctly
      type: "image",
    },
    {
      name: "Inventory Audit",
      url: "/uploads/martin.jpg",
      type: "image",
    },
    {
      name: "promo-video",
      url: "/uploads/ayawin.mp4",
      type: "video",
    },
    {
      name: "Data Entry",
      url: "/uploads/Data entry.jpeg",
      type: "image",
    },
    {
      name: "Our Services",
      url: "/uploads/Services.jpg",
      type: "image",
    },
    {
      name: "Stock Arrangement",
      url: "/uploads/Stock.jpeg",
      type: "image",
    },
    {
      name: "Physical Inventory Counting",
      url: "/uploads/Stock-taking.jpeg",
      type: "image",
    },
    {
      name: "Engaging With Clients",
      url: "/uploads/Client.jpeg",
      type: "image",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">
          Our Work & Moments
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow bg-white hover:scale-[1.03] transition"
            >
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-64 object-cover object-center"
                />
              ) : item.type === "video" ? (
                <video
                  controls
                  className="w-full h-64 object-cover object-center bg-black"
                >
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              <div className="p-4 flex justify-between items-center">
                <p className="font-semibold text-blue-700 truncate">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
