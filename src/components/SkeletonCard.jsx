import Skeleton from '@mui/material/Skeleton';

const SkeletonCard = () => {
  return (
    <>
      <Skeleton sx={{ bgcolor: 'grey.900' }} width={150} height="auto" />
      <div className="movies-info">
        <h2 className="movies-title"></h2>
        <h2 className="movies-date"></h2>
        <h2 className="movies-rating"></h2>
      </div>
    </>
  );
};

export default SkeletonCard;
