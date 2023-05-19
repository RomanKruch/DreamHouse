import createClassName from "./createClassName";

const createActiveClass = (defClass: string, condition: boolean) => {
  return createClassName(defClass, 'active', condition)
}

export default createActiveClass;
