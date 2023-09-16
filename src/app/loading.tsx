import { Spinner } from "@components";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Spinner size={32} color="text-primary_orange" />
    </div>
  )
}