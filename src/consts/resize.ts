export const handleResizeWindow = () => {
  let width = window.innerWidth * 0.5;
  if (window.innerWidth >= 768 && window.innerWidth < 1024) width = window.innerWidth * 0.7;
  else if (window.innerWidth < 768) width = window.innerWidth;
  return width;
};
