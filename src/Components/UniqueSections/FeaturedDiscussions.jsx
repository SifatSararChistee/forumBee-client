import React from 'react';

const FeaturedDiscussions = () => {
  const featuredDiscussions = [
    { id: 1, title: 'How to set up a React project?', author: 'John Doe', replies: 42, views: 1200, time: '2 hours ago', description: 'Learn the basics of setting up a React project from scratch using create-react-app.' },
    { id: 2, title: 'Understanding Tailwind CSS utilities', author: 'Jane Smith', replies: 28, views: 800, time: '1 day ago', description: 'Dive deep into the core utilities of Tailwind CSS and how they can speed up your development.' },
    { id: 3, title: 'Best practices for state management in React', author: 'Tom Black', replies: 18, views: 950, time: '3 hours ago', description: 'Discuss the best ways to manage state in large React applications with hooks and context API.' },
    { id: 4, title: 'Exploring the new features of ES2025', author: 'Alice Green', replies: 30, views: 1600, time: '4 hours ago', description: 'A deep dive into the upcoming features of JavaScript and how they can improve development efficiency.' },
    { id: 5, title: 'How to improve website performance with lazy loading', author: 'Emily White', replies: 54, views: 2200, time: '2 days ago', description: 'Learn how lazy loading can significantly improve your website’s loading time and user experience.' },
    { id: 6, title: 'A guide to setting up a full-stack JavaScript application', author: 'David Lee', replies: 63, views: 3000, time: '5 hours ago', description: 'Step-by-step guide to setting up a full-stack application using Node.js, Express, and React.' },
  ];

  return (
    <div className="py-10 max-w-screen-2xl mx-auto w-11/12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Discussions</h2>
        <p className="text-gray-600">Explore the most popular discussions happening right now in ForumBee!</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {featuredDiscussions.map((discussion) => (
          <div key={discussion.id} className="card shadow-lg bg-white hover:shadow-2xl transition-all transform hover:scale-105 p-6">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-green-700">{discussion.title}</h3>
              <p className="text-sm text-gray-500">By {discussion.author}</p>
              <p className="text-gray-600 mt-2">{discussion.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">{discussion.time}</span>
                <span className="text-sm text-gray-500">{discussion.replies} Replies</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{discussion.views} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDiscussions;
