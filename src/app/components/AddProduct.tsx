// components/AddProductForm.js
"use client"
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('http://localhost:3000/product/AddProduct', formData);

      if (response.status === 201) {
        setSuccessMessage(response.data.message);
        setFormData({
          title: '',
          description: '',
          price: '',
          image: '',
        });
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(null);
    }
  };

  return (
    Cookies.get('islogin') ? (
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
        {error && <p style={{ color: 'red' }} className="mt-4">{error}</p>}
        {successMessage && <p style={{ color: 'green' }} className="mt-4">{successMessage}</p>}
      </div>
    ) : (
      <div>Login to add products</div>
    )
  );
};

export default AddProductForm;
