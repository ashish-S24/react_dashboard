// weatherApi.js

export  async function fetChartData() {
    const apiUrl =
      "http://api.openweathermap.org/data/2.5/forecast?lat=20.5937&lon=78.9629&appid=6c925b196aa56377527fc7aee3df070d";
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      const chartData = data.list.map((item) => ({
        tempt: item.main.temp,
        humi: item.main.humidity,
      }));
      return chartData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  