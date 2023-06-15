const uzeReplace = (query, value) => {
  let url = new URL(window.location);
  url.searchParams.set(query, value);
  if (!value && value !== 0) {
    url.searchParams.delete(query);
  }

  return url.search;
};
export default uzeReplace;
