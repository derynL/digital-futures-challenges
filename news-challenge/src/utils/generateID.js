const generateHeadlineID = (idFromAPI) => {
  return idFromAPI.replaceAll("/", "");
};

export default generateHeadlineID;
