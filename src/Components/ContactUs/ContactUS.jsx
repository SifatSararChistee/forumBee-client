import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us - ForumBee</h1>

      <div className="bg-base-100 shadow-lg p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">We’d Love to Hear from You!</h2>
        <p className="text-center text-gray-600 mb-6">
          Whether you have questions, feedback, or need support, feel free to get in touch with us.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Email:</strong> <a href="mailto:sifatsararchistee@gmail.com" className="text-green-600 hover:underline">sifatsararchistee@gmail.com</a>
            </p>
            <p className="mb-2">
              <strong>Twitter:</strong> <a href="https://x.com/sifat_sarar" className="text-green-600 hover:underline">@sifat_sarar</a>
            </p>
            <p className="mb-2">
              <strong>Report a Vulnerability:</strong> <a href="https://github.com/SifatSararChistee" className="text-green-600 hover:underline">https://sifat-sarar-chistee.netlify.app</a>
            </p>
            <p className="mb-2">
              <strong>Report a Bug:</strong> Please create a bug report in our <a href="https://github.com/SifatSararChistee" className="text-green-600 hover:underline">open source repository</a>.
            </p>
            <p className="mb-2">
              <strong>Request a Feature:</strong> Please start a new <a href="https://github.com/SifatSararChistee" className="text-green-600 hover:underline">GitHub Discussion</a> in the Forem repo.
            </p>
          </div>

          <div className="card p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success text-white w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
