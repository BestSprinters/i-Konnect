function ChartMoreButton({ onClick }) {
  return (
    <button
      type="button"
      className="border-#F1EEF9/80 w-80 rounded border bg-white/10 py-1 text-center text-sm font-bold leading-7"
      onClick={onClick}
    >
      더 보기
    </button>
  );
}

export default ChartMoreButton;
