import React from 'react';


const CommunitySpotlight = () => {
    const spotlightMembers = [
        { id: 1, name: 'John Doe', role: 'Moderator', posts: 112, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'Jane Smith', role: 'Expert', posts: 98, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 3, name: 'Tom Black', role: 'Contributor', posts: 75, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: 4, name: 'Emily White', role: 'Contributor', posts: 50, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { id: 5, name: 'David Lee', role: 'Moderator', posts: 89, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { id: 6, name: 'Sara Green', role: 'Expert', posts: 115, avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
      ];
      
  return (
    <div className="py-12 text-black max-w-screen-2xl mx-auto w-11/12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Community Spotlight</h2>
        <p className="text-lg">Meet the top contributors who make ForumBee a great place to learn and grow!</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 justify-center gap-12">
        {spotlightMembers.map((member) => (
          <div key={member.id} className="bg-white text-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src={member.avatar} alt={member.name} />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm mb-2">{member.role}</p>
            <p className="text-gray-600">Posts: {member.posts}</p>
            <div className="mt-4 text-center">
              <button className="btn btn-success text-white btn-sm">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySpotlight;
