export const validateEvent = (event) => {
  return event.target.tagName.toLowerCase() !== 'input';
};
