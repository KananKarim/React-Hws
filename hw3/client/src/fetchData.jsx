export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/products')
      const data = await response.json()
      return data;

    } catch (err) {
      console.log(err);
    }
  }