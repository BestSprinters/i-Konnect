function LandingSection({
  children,
  backgroundImageAlt,
  backgroundImage,
  previewImageAlt,
  previewImage,
  title,
}) {
  return (
    <section className="relative mx-auto flex h-dvh flex-col items-center justify-center gap-y-[10%] xl:w-[1200px]">
      <div className="text-center">
        <p className="text-sm text-yellowPrimary md:text-base">{title}</p>
        {children}
      </div>
      <img src={previewImage} alt={previewImageAlt} className="h-1/2" />
      <img
        src={backgroundImage}
        alt={backgroundImageAlt}
        className="absolute -z-50 size-full object-cover opacity-70"
      />
      {/* TODO : 이미지 외부에 gradient를 위한 div태그 인데 더 좋은 방법 있으면 말씀해 주시면 감사하겠습니다! */}
      <div
        className="absolute -z-40 size-full
        bg-[radial-gradient(50%_50%_at_50%_50%,rgba(2,0,14,0)_0%,rgba(2,0,14,0.180099)_37.5%,rgba(2,0,14,0.5)_79.5%,#02000E_100%)]"
      />
    </section>
  );
}

export default LandingSection;
