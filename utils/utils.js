export function objectOrStringToString (filter) {
  const stringifiedFilter = filter !== undefined && typeof filter === 'object' && filter !== null ? JSON.stringify(filter) : filter;
  if (!stringifiedFilter) return undefined;
  return stringifiedFilter;
};

export function toQueryString (object) {
  if (typeof (data) === 'string') return object;

  const query = [];

  for (const key in object) {
    if (object[key] !== undefined && object[key] !== null) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(object[key]));
    }
  }

  return query.join('&');
};
