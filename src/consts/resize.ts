export const handleResizeWindow = () => {
  let temp = 50;
  if (window.innerWidth >= 768 && window.innerWidth < 1024) temp = 70;
  else if (window.innerWidth < 768) temp = 100;
  return temp;
};
