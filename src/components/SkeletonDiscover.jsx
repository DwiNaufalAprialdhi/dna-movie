import Skeleton from "@mui/material/Skeleton";

const SkeletonDiscover = () => {
  return (
    <div className="w-full overflow-hidden lg:h-[650px] md:h-[500px] h-[400px]">
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rounded"
        width={1900}
        height={650}
      />
    </div>
  );
};

export default SkeletonDiscover;
