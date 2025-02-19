import { Link } from "react-router-dom";

export default function HelpSupport() {
    const topics = [
      { title: "Bug Fixing", description: "Get help debugging your code." },
      { title: "Code Review", description: "Share your code for feedback." },
      { title: "Resources & Tutorials", description: "Find useful learning materials." },
      { title: "General Queries", description: "Ask anything related to coding." },
    ];
  
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Help & Support</h2>
          <p className="text-gray-600">Need help? Contact With Us anywhere from the world</p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {topics.map((topic, index) => (
            <div key={index} className="p-6 border rounded-xl shadow hover:shadow-2xl transition">
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              <p className="text-gray-600 mt-2">{topic.description}</p>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-8">
          <Link to='/contact'><button className="btn btn-success text-white">Ask a Question</button></Link>
        </div>
      </div>
    );
  }
  