const axios = require('axios');

async function getBankData(id) {
  try {
    const response = await axios.get(`https://bankapi.harunbulbul.com/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getBankData };