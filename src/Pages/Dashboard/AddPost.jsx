import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useSingleUser from '../../Hooks/useSingleUser'

const AddPost = () => {
  const axiosPublic=useAxiosPublic()
  const {user} = useAuth()
  const [userData] =useSingleUser()
  // console.log(userData?.badge)
  const [tags, setTags]=useState([])
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  const [formVisible, setFormVisible] = useState(true);
    const [formData, setFormData] = useState({
    authorName: user?.displayName,
    authorImg: user?.photoURL,
    postTitle: "",
    tags: [],
    time:formattedDate,
    comments:0,
    authorEmail: user?.email,
    upVotes: 0,
    downVotes: 0,
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch post count from API
    axiosPublic
    .get(`/user-posts/${user?.email}`)
    .then((response) => {
      if (response.data.length >= 5 && userData?.badge === "Bronze") {
        setFormVisible(false);
      } else if (userData?.badge === "Gold") {
        setFormVisible(true);
      }
    })
    .catch((error) => {
      console.error("Error fetching post count:", error);
    });
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        // Make the request to fetch tags
        const response = await axiosPublic.get('/tags');
        const formattedTags = response.data[0].tags.map(tag => ({ value: tag, label: tag }));
        setTags(formattedTags);
      } catch (err) {
        console.error('Error fetching tags:', err);
      }
    };

    fetchTags(); // Call the async function to fetch tags
  }, []); 

  const handleTagChange = (selectedOptions) => {
    const selectedTags = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFormData({ ...formData, tags: selectedTags });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    // Post data to API
    // console.log(formData)
    axiosPublic
      .post("/add-post", formData)
      .then((response) => {
        if(response.data.insertedId){
          toast.success("Post added successfully!");
          navigate('/')
        }
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        {formVisible ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Add a Post
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Image</span>
              </label>
              <input
              disabled
                type="text"
                name="authorImage"
                value={formData.authorImg}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Enter image URL"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
              disabled
                type="text"
                name="authorName"
                value={formData.authorName}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Enter author name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Email</span>
              </label>
              <input
              disabled
                type="email"
                name="authorEmail"
                value={formData.authorEmail}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Enter author email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                name="postTitle"
                value={formData.postTitle}
                onChange={handleInputChange}
                className="input input-bordered w-full"
                placeholder="Enter post title"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full"
                placeholder="Enter post description"
                required
              ></textarea>
            </div>
            <div className="form-control">
        <label className="label">
          <span className="label-text">Tags</span>
        </label>
        <Select
          options={tags}
          onChange={handleTagChange}
          placeholder="Select tags"
          className="react-select-container"
          classNamePrefix="react-select"
          isMulti  // Allow multiple selections
        />
      </div>
            <button type="submit" className="btn btn-success text-white w-full">
              Add Post
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-700">
              You have reached the maximum post limit.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Become a member to add more posts.
            </p>
            <button
              onClick={() => navigate("/membership")}
              className="btn btn-success text-white"
            >
              Become a Member
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPost;
