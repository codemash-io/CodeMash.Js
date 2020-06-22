export function objectOrStringToString(filter) {
  const stringifiedFilter = filter !== undefined && typeof filter === 'object' && filter !== null ? JSON.stringify(filter) : filter;
  if (!stringifiedFilter) return undefined;
  return stringifiedFilter;
}