import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Understanding React Server Components',
    author: 'Jane Doe',
    date: 'January 15, 2025',
    summary: 'Learn about React Server Components and how they improve performance and maintainability.',
  },
  {
    id: 2,
    title: 'Getting Started with Tailwind CSS v4',
    author: 'John Smith',
    date: 'January 12, 2025',
    summary: 'Discover the new features in Tailwind CSS v4 and how to use them effectively.',
  },
  {
    id: 3,
    title: '10 JavaScript Tips for Modern Development',
    author: 'Alice Johnson',
    date: 'January 10, 2025',
    summary: 'Enhance your JavaScript skills with these 10 tips for writing cleaner and faster code.',
  },
  {
    id: 4,
    title: 'Deploying Apps with Vercel: A Beginner’s Guide',
    author: 'Bob Lee',
    date: 'January 8, 2025',
    summary: 'Step-by-step instructions to deploy your apps on Vercel with ease.',
  },
  {
    id: 5,
    title: 'Mastering CSS Grid Layouts',
    author: 'Clara Kim',
    date: 'January 5, 2025',
    summary: 'Understand how to create complex layouts effortlessly using CSS Grid.',
  },
  {
    id: 6,
    title: 'Exploring the Future of WebAssembly',
    author: 'David Park',
    date: 'January 3, 2025',
    summary: 'An overview of WebAssembly and its impact on web development.',
  },
  {
    id: 7,
    title: 'Improving SEO with Next.js',
    author: 'Emily Clark',
    date: 'January 1, 2025',
    summary: 'Learn how to use Next.js to improve SEO and boost your website ranking.',
  },
  {
    id: 8,
    title: 'The State of Web Development in 2025',
    author: 'George Brown',
    date: 'December 30, 2024',
    summary: 'Explore current trends and predictions for web development in 2025.',
  },
  {
    id: 9,
    title: 'Building Accessible Websites with ARIA',
    author: 'Hannah White',
    date: 'December 28, 2024',
    summary: 'Make your websites more inclusive by mastering ARIA roles and attributes.',
  },
  {
    id: 10,
    title: 'The Benefits of TypeScript for Large Projects',
    author: 'Ian Black',
    date: 'December 25, 2024',
    summary: 'Discover why TypeScript is the go-to choice for managing large codebases.',
  },
];

const LatestTopics = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Latest Topics</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card shadow-xl bg-base-100 hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">By {blog.author} • {blog.date}</p>
              <p className="mt-2 text-gray-700">{blog.summary}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-success text-white btn-sm">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTopics;
