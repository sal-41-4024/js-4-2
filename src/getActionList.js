export default function getActionList({ special = [] }, defaultDescription) {
  if (!Array.isArray(special)) {
    throw new Error('Not a list');
  }
  return special.map(({
    id, name, icon, description = defaultDescription,
  }) => ({
    id, name, icon, description,
  }));
}
