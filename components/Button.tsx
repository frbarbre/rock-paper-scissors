type Props = {
  handleClick: () => void;
  children: React.ReactNode;
};

export default function Button({ handleClick, children }: Props) {
  return (
    <button
      type="button"
      className="mb-[56px] mt-[52px] mx-auto md:mb-[32px] md:mt-[44.3px] md:mx-[32px] py-[10px] px-[36px] border-white border-[1px] border-solid rounded-[8px] text-[16px] text-white tracking-[2.5px] uppercase font-semibold cursor-pointer hover:text-gray hover:bg-white transition-all"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
