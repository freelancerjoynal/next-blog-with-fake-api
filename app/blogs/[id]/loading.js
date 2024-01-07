import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  return <Skeleton className="h-3" count={50}></Skeleton>;
}

export default Loading;
