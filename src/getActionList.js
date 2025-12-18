export default function getActionList(obj, defaultDescription) {
  if (!obj.special) {
    throw new Error('Cannot find the property');
  }
  if (!Array.isArray(obj.special)) {
    throw new Error('The property is not an array');
  } else {
    return obj.special.map((item) => {
      if (!item.description) {
        return { ...item, description: defaultDescription };
      }
      return item;
    });
  }
}
