const formatUrlDisplay = (url) => {
  const lastChar = url.charAt(url.length - 1);

  let cleaned = url.replace('http://', '');

  if (cleaned === url) {
    cleaned = url.replace('https://', '');
  }

  if (lastChar === '/') {
    return cleaned.slice(0, -1);
  }

  return cleaned;
};

export default formatUrlDisplay;
