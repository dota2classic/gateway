export const didExpire = (date: Date) => {
  return new Date().getTime() - date.getTime() > 0;
};
