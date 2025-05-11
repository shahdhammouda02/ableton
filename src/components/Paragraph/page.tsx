
export const Paragraph =({ 
  title="", 
  description="",
  description2="",
  maxWidth = "max-w-3xl", 
  titleSize = "text-xl sm:text-xl md:text-5xl lg:text-4xl",
  descriptionSize = "text-xl sm:text-xl md:text-2xl text-gray-800",
  marginBottom = "mb-20 sm:mb-24 md:mb-30",
  textColor = "text-black"
}) => {
  return (
    <div className={`${maxWidth} mx-auto ${marginBottom} text-left ${textColor}`}>
      {title && (
        <p className={`${titleSize} mb-4 sm:mb-5 md:mb-6 ${textColor}`}>
          {title}
        </p>
      )}
      {description && (
        <p className={`${descriptionSize} mb-4 sm:mb-5 md:mb-6`}>
          {description}
        </p>
      )}
      {description2 && (
        <p className={`${descriptionSize} mb-3 sm:mb-3 md:mb-3`}>
            {description2}
        </p>
      )}
    </div>
  );
};

export default Paragraph
