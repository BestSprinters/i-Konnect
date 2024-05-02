function LandingSection({
  children,
  backgroundImageAlt,
  backgroundImage,
  previewImageAlt,
  previewImage,
  title,
}) {
  return (
    <section className="relative flex h-dvh flex-col items-center justify-center gap-y-[10%]">
      <div className="text-center">
        <p className="text-base text-yellowPrimary">{title}</p>
        {children}
      </div>
      <img src={previewImage} alt={previewImageAlt} className="h-1/2" />
      <img
        src={backgroundImage}
        alt={backgroundImageAlt}
        className="absolute -z-50 size-full object-cover opacity-70"
      />
    </section>
  );
}

export default LandingSection;
