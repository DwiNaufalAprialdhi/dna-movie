import Skeleton from "@mui/material/Skeleton";

const SkeletonDiscoverPoster = () => {
  return (
    <div className="lg:w-[300px] md:w-[200px] w-[200px] overflow-hidden  lg:h-[400px] md:h-[300px] h-[250px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <Skeleton
        sx={{ bgcolor: "grey.800" }}
        variant="rounded"
        width={300}
        height={400}
      />
    </div>
  );
};

export default SkeletonDiscoverPoster;
