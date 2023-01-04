const TodaysDate = () => {
  let date = new Date().toLocaleDateString('en-uk', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <p>{date}</p>
    </>
  );
};

export default TodaysDate;
