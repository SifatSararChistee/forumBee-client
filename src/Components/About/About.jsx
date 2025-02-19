import React from "react";

const About = () => {
  return (
    <div className="mt-5 flex items-center justify-center p-6">
      <div className="max-w-3xl text-center p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold">About Our Forum</h1>
        <p className="mt-4 text-lg">
          Welcome to <span className="font-semibold">ForumBee</span>, the place where ideas come to life! We are a community-driven platform dedicated to fostering discussions, sharing knowledge, and connecting like-minded individuals.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              ✅ <span>Engaging discussions on various topics</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Friendly and supportive community</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Modern, clean, and user-friendly interface</span>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Join the Conversation!</h2>
          <p className="mt-2 text-gray-600">
            Become a part of our growing community today. Sign up, explore, and start engaging with others!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
