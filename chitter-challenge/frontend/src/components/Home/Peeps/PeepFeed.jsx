import PeepCard from './PeepCard';
// import PeepFeedLoader from './PeepFeedLoader';
// import AppError from '../../Static/AppError';

const PeepFeed = ({ peepData }) => {
  if (!peepData?.length > 0) {
    return <p>Content is loading...</p>;
  }
  // if (!peepData || peepData?.hasOwnProperty(`error`)) {
  //   peepData = <AppError errorCode={peepData?.error ?? 0} />;
  // }
  // if (Array.isArray(peepData) && peepData.length === 0) {
  //   let peepCardLoaders = [];
  //   let numberOfPlaceholders = 4;
  //   for (let i = 0; i < numberOfPlaceholders; i++) {
  //     peepCardLoaders[i] = (
  //       <article key={i}>
  //         <PeepFeedLoader />
  //       </article>
  //     );
  //   }
  //   peepData = peepCardLoaders;
  // }

  const showPeeps = () => {
    return peepData
      .sort((a, b) => {
        return a.date < b.date ? 1 : -1;
      })
      .map((peep) => {
        return (
          <div key={peep._id}>
            <PeepCard peep={peep} />
          </div>
        );
      });
  };
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='col'> {showPeeps()}</div>
      </div>
    </>
  );
};

export default PeepFeed;
