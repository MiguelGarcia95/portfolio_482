export const loadContent = (containerName, height) => {
  const containerContent = document.querySelector(containerName);
  if (containerContent) {
    containerContent.style.height = height;
  }
}

export const unloadContent = containerName => {
  const containerContent = document.querySelector(containerName);
  if (containerContent) {
    containerContent.style.height = '0px';
  }
}