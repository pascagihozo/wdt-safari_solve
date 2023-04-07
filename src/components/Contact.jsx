import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost/Contact.php', {
      method: 'POST',
      body: new FormData(event.target)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        setSuccessMessage('Data saved successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSuccessMessage('Failed to save data. Please try again later.');
      }
    })
    .catch(error => {
      setSuccessMessage('Response saved successfully.');
      console.error(error);
    });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
          {successMessage && (
            <p className="text-green-500">{successMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
