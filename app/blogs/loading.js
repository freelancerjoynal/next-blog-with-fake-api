

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <Skeleton baseColor="red" className="h-96" count={1} />
          <Skeleton baseColor="yellow" className="h-32" count={1} />
        </div>
        <div>
          <Skeleton className="h-96" count={1} />
          <Skeleton className="h-32" count={1} />
        </div>
        <div>
          <Skeleton className="h-96" count={1} />
          <Skeleton className="h-32" count={1} />
        </div>
        <div>
          <Skeleton className="h-96" count={1} />
          <Skeleton className="h-32" count={1} />
        </div>
        <div>
          <Skeleton className="h-96" count={1} />
          <Skeleton className="h-32" count={1} />
        </div>
        <div>
          <Skeleton className="h-96" count={1} />
          <Skeleton className="h-32" count={1} />
        </div>
      </div>
    </>
  );
}

export default Loading;
