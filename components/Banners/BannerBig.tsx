import Link from "next/link";

export const Banner = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="p-6 py-12 bg-violet-400 text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <span className="ml-5">50% Off </span>
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <Link href="/products">
              <a
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              >
                Shop Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
