const PageFooter = () => {
  return (
    <div className="bg-mint-800 border-mint-500 border-t-2 w-screen h-12 text-mint-50">
      <div className="flex justify-center items-center py-1 h-full dark:text-mint-50">
        &copy; {new Date().getFullYear()} FinCoder Blog. All rights reserved.
      </div>
    </div>
  );
};

export default PageFooter;
