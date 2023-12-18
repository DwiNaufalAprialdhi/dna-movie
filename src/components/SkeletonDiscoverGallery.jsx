import Skeleton from "@mui/material/Skeleton";

const SkeletonDiscoverGallery = () => {
  return (
    <div className="w-full overflow-hidden lg:h-[350px] md:h-[250px] h-[150px]">
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rounded"
        width={1900}
        height={350}
      />
    </div>
  );
};

export default SkeletonDiscoverGallery;
