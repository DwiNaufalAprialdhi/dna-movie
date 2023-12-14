// eslint-disable-next-line react/prop-types
const Rating = ({ value, className }) => {
  return (
    <>
      <h2 className={className ? className : 'discover-rating'}>
        {value}
        <img src="/star.svg" alt="rate" className="w-3 h-3" />
      </h2>
    </>
  );
};

export default Rating;
