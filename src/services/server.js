// weatherApi.js
const API_KEY = "4626c9e9e121bd0737120601a8dc7e06"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export  async function fetChartData() {
    const apiUrl =
      "https://dummyjson.com/products";
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      const chartData = data.products.map((item) => ({
        tempt: item.price,
        humi: item.stock,
      }));
      return chartData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
}

fetChartData();
  