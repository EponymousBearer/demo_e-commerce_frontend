/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'

const fetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5005/product/AllProducts');
                setData(response.data.allProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
  return data
}

export default fetchData