const createClassName = (
  defClass: string,
  mark: string,
  condition: boolean | string,
) => {
  if (condition) {
    return `${defClass} ${defClass}-${mark}`;
  }

  return defClass;
};

export default createClassName;
