import React, { useState } from "react";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState({
    authorImage: "",
    authorName: "",
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnnouncement((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Announcement Submitted:", announcement);
    // Here, you can handle the submission (e.g., save it to a database)
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Create an Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gray-300">
            <input
              type="file"
              name="authorImage"
              accept="image/*"
              onChange={(e) => setAnnouncement({ ...announcement, authorImage: URL.createObjectURL(e.target.files[0]) })}
              className="hidden"
              id="authorImageInput"
            />
            <label htmlFor="authorImageInput" className="cursor-pointer">
              {announcement.authorImage ? (
                <img src={announcement.authorImage} alt="Author" className="w-full h-full object-cover rounded-full" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white bg-gray-600 rounded-full">+</div>
              )}
            </label>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={announcement.authorName}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter author's name"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={announcement.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter the title of the announcement"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Description</label>
          <textarea
            name="description"
            value={announcement.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Write the announcement details here"
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit Announcement
        </button>
      </form>
    </div>
  );
};

export default Announcement;
