const BlockTitle = ({title, className}:{title: string, className?: string}) => {
  return (
    <div className={`flex gap-[6px] items-center py-3 ${className}`}>
      <span className="w-3 h-3 rounded-full bg-gray-07"></span>
      <p className="text-[12px] font-bold text-black leading-normal">{title}</p>
    </div>
  );
};

export default BlockTitle;
