import { useEffect } from "react";
import { useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const getUser = async (username) => {
    try {
      const fetchUser = `https://api.github.com/users/${username}`;

      const fetching = await fetch(fetchUser);

      const json = await fetching.json();

      setData(json);

      console.log(json);
    } catch (error) {
      setError(error);
      setData(null);
    }
  };

  useEffect(() => {
    getUser(username);
  }, [username]);

  return (
    <>
      {data !== {} ? (
        <div>
          <h1>{data.login}</h1>
          <p>{data.url}</p>
        </div>
      ) : (
        <h1>{error.message}</h1>
      )}
    </>
  );
}
