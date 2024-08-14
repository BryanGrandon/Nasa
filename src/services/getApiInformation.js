const getInformation = async (url, key) => {
  const result = await fetch(url + `?api_key=${key}`);
  const data = await result.json();
  return data;
};

export { getInformation };
