// Execute callback function if event did not target an input
export const validateEvent = (callback) => (event) => {
  event.preventDefault();
  event.target.tagName !== 'INPUT' && callback();
};

export const getNewId = () => crypto.randomUUID();
