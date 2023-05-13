const createActiveClass = (defClass: string, condition: boolean) => {
  const activeClass = condition ? ' ' + defClass + '-active' : '';
  return defClass + activeClass;
};

export default createActiveClass;
