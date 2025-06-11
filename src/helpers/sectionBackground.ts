export const sectionBackground = (
  url: string,
  opacity: number,
): React.CSSProperties => {
  return {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${url})`,
  };
};
