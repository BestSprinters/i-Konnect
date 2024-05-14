function LandingSection({
  children,
  backgroundImageAlt,
  backgroundImage,
  previewImageAlt,
  previewImage,
  title,
}) {
  return (
    <section className="sticky top-0 mx-auto flex h-dvh flex-col items-center justify-center gap-y-[10%] desktop:w-[1200px]">
      <div className="text-center">
        <p className="text-sm text-yellowPrimary tablet:text-base">{title}</p>
        {children}
      </div>
      <img src={previewImage} alt={previewImageAlt} className="h-1/2" />
      <img
        src={backgroundImage}
        alt={backgroundImageAlt}
        className="absolute -z-50 size-full object-cover"
      />
      <div
        className="absolute -z-40 size-full
        bg-[radial-gradient(50%_50%_at_50%_50%,rgba(2,0,14,0)_0%,rgba(2,0,14,0.180099)_37.5%,rgba(2,0,14,0.5)_79.5%,#02000E_100%)]"
      />
    </section>
  );
}

export default LandingSection;
