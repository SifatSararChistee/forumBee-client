import React from "react";
import Marquee from "react-fast-marquee";
import useAnnouncement from "../../Hooks/useAnnouncement";

const Announcements = () => {
    const [announcements]=useAnnouncement()
  return (
    <div className="w-full max-w-screen-2xl mx-auto bg-white py-4">
      <Marquee gradient={false} speed={50}>
        {announcements.map((item) => (
          <div
            key={item._id}
            className="flex items-center space-x-4 px-4 border-r border-gray-300 last:border-r-0"
          >
            <img
              src={item.authorImage}
              alt={item.authorName}
              className="w-10 h-10 rounded-full"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-blue-800 font-bold">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Announcements;

