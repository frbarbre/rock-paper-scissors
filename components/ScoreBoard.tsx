export default function ScoreBoard({ score }: { score: number }) {
  return (
    <div className="w-[80px] h-[72px] md:w-[150px] md:h-[114px] bg-gradient-to-t from-[#F3F3F3] to-white shadow-xs rounded-[8px] flex items-center justify-center flex-col">
      <h3 className="uppercase text-score font-semibold text-[10px] tracking-[1.56px] md:text-[16px] md:tracking-[2.5px]">
        Score
      </h3>
      <h2 className="text-gray text-[40px] font-bold leading-[40px] md:text-[64px] md:leading-[64px]">{score}</h2>
    </div>
  );
}
