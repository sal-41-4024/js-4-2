export default function orderByProps(obj, order) {
  const props = [];
  Object.keys(obj).forEach((key) => {
    props.push({ key, value: obj[key] });
  });
  props.sort((a, b) => {
    const indexA = order.indexOf(a.key);
    const indexB = order.indexOf(b.key);
    if (indexA === -1 && indexB === -1) {
      return a.key.localeCompare(b.key);
    }
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    return indexA - indexB;
  });
  return props;
}
