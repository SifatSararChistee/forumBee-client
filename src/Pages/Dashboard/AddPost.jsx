import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const tagOptions = [
  { value: "technology", label: "Technology" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
  { value: "entertainment", label: "Entertainment" },
];

const AddPost = () => {
  const { register, handleSubmit, setValue, reset } = useForm();

  const onSubmit = (data) => {
    const postData = {
      ...data,
      tag: data.tag?.value || null, // Handle tag selection
      upVote: 0,
      downVote: 0,
    };
    console.log(postData);
    reset(); // Reset form after submission
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Author Image */}
        <div>
          <label className="block text-sm font-medium mb-1">Author Image</label>
          <input
            type="text"
            {...register("authorImage", { required: true })}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Author Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Author Name</label>
          <input
            type="text"
            {...register("authorName", { required: true })}
            placeholder="Enter author name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Author Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Author Email</label>
          <input
            type="email"
            {...register("authorEmail", { required: true })}
            placeholder="Enter author email"
            className="input input-bordered w-full"
          />
        </div>

        {/* Post Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Post Title</label>
          <input
            type="text"
            {...register("postTitle", { required: true })}
            placeholder="Enter post title"
            className="input input-bordered w-full"
          />
        </div>

        {/* Post Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Post Description</label>
          <textarea
            {...register("postDescription", { required: true })}
            placeholder="Enter post description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Tag */}
        <div>
          <label className="block text-sm font-medium mb-1">Tag</label>
          <div className="w-full">
            <Select
              options={tagOptions}
              onChange={(option) => setValue("tag", option)}
              placeholder="Select a tag"
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
