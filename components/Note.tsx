const Note = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative bg-mint-50 dark:bg-mint-800 mt-6 mb-2 px-4 py-4 border border-mint-100 rounded text-mint-50 dark:text-mint-50">
      <span className="-top-3 left-2 absolute bg-mint-200 px-2 border border-mint-700 rounded text-mint-900 text-sm">
        Note:
      </span>
      {children}
    </div>
  );
};

export default Note;
