// Execute callback function if event did not target an input
export const validateEvent = (callback) => (event) => {
  if (event.target.tagName !== 'INPUT') {
    event.preventDefault();
    callback();
  }
};

export const getNewId = () => crypto.randomUUID();
