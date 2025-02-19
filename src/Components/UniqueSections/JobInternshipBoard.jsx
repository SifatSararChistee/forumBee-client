import Marquee from "react-fast-marquee";

export default function JobInternshipBoard() {
    const jobs = [
      { title: "Frontend Developer Intern", type: "Internship", location: "Remote" },
      { title: "Junior MERN Stack Developer", type: "Full-Time", location: "New York, USA" },
      { title: "React Developer", type: "Part-Time", location: "London, UK" },
      { title: "Backend Developer Intern", type: "Internship", location: "Remote" },
      { title: "Frontend Developer", type: "FullTime", location: "USA" },
      { title: "Software Engineer Intern", type: "Internship", location: "Remote" },
    ];
  
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Job & Internship Board</h2>
          <p className="text-gray-600">Find the best opportunities for your career growth.</p>
        </div>
  
        <div className="flex gap-6 mt-8">
        <Marquee gradient={false} speed={50}>
        {jobs.map((job, index) => (
            <div 
              key={index} 
              className="p-6 border rounded-xl shadow hover:shadow-2xl transition mx-3"
            >
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{job.type} • {job.location}</p>
            </div>
          ))}
        </Marquee>
        </div>
      </div>
    );
  }
  