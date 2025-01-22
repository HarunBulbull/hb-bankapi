async function getBankData(id) {
  try {
    const response = await fetch(`https://bankapi.harunbulbul.com/${id}`, {method: "GET",});
    const data = await response.json();
    if(response.ok){return {success:true, ...data}}
    else{return {success:false, error: data.error}}
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getBankData };