import Skeleton from "@mui/material/Skeleton";

const SkeletonCard = () => {
  return (
    <>
      <div className="flex lg:flex-row md:flex-row flex-row gap-5 overflow-hidden">
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          width={200}
          height={150}
          variant="rounded"
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          width={200}
          height={150}
          variant="rounded"
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          width={200}
          height={150}
          variant="rounded"
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          width={200}
          height={150}
          variant="rounded"
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          width={200}
          height={150}
          variant="rounded"
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          width={200}
          height={150}
          variant="rounded"
        />
      </div>
    </>
  );
};

export default SkeletonCard;
