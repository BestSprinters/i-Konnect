function LandingSection({
  children,
  backgroundImageAlt,
  backgroundImage,
  previewImageAlt,
  previewImage,
  title,
}) {
  return (
    <section className="relative flex h-dvh flex-col items-center">
      <div className="mt-[10%] text-center">
        <p className="text-base text-yellowPrimary">{title}</p>
        {children}
      </div>
      <img src={previewImage} alt={previewImageAlt} className="mt-[5%] h-1/2" />
      <img
        src={backgroundImage}
        alt={backgroundImageAlt}
        className="absolute -z-50 size-full object-cover opacity-70"
      />
    </section>
  );
}

export default LandingSection;
