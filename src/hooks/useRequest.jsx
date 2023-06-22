const { REACT_APP_BASE_URL } = process.env;

const useRequest = () => {
  const request = async ({ me, url, method = "GET", token, headers, body }) => {
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    try {
      let res = await fetch(
        `${me ? `http://localhost:8081/api` : REACT_APP_BASE_URL}${url}`,
        options
      ).then((res) => res.json());
      return res;
    } catch (err) {
      return err;
    }
  };
  return request;
};
export default useRequest;
