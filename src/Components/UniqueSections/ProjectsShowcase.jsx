export default function ProjectsShowcase() {
    const projects = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio built with React and Tailwind.",
        tech: "React, Tailwind, DaisyUI",
        image: "https://i.ibb.co.com/59XxLFs/portfolio.png", // Replace with actual screenshot URL
      },
      {
        title: "E-commerce App",
        description: "A full-stack MERN e-commerce platform.",
        tech: "MongoDB, Express, React, Node.js",
        image: "https://i.ibb.co.com/9kkmYLf5/ecommerce.png",
      },
      {
        title: "Chat Application",
        description: "A real-time chat app using Socket.io.",
        tech: "React, Node.js, Socket.io",
        image: "https://i.ibb.co.com/67Mnzd2m/chat-app.png",
      },
      {
        title: "Task Manager",
        description: "A simple task management web app.",
        tech: "Next.js, Tailwind, Prisma",
        image: "https://i.ibb.co.com/CKQG4BHD/task-manager.png",
      },
    ];
  
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Projects & Showcases</h2>
          <p className="text-gray-600">Explore community projects or showcase your own.</p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-4 border rounded-xl shadow hover:shadow-2xl transition bg-white"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-lg w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">Tech: {project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  