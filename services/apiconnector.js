import axios from "axios";

// Create an axios instance with default settings
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Ensures all requests use the base URL
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

// Function to handle API requests
export const apiConnector = async (
  method,
  url,
  bodyData = null,
  headers = {},
  params = {}
) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: bodyData,
      headers,
      params,
    });
    return response;
  } catch (error) {
    console.error(
      "API Connector Error:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error to be handled by the calling function
  }
};
