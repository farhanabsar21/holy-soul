// components/LoadingSkeleton.tsx
interface LoadingSkeletonProps {
  count?: number; // number of skeleton rows
}

export default function LoadingSkeleton({ count = 5 }: LoadingSkeletonProps) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="h-6 bg-gray-300 rounded animate-pulse"></div>
      ))}
    </div>
  );
}
