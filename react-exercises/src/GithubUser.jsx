
import { useGitubUser } from "./useGithubUser";


export function GithubUser({ username }) {


  // const [data, setData] = useState({});
  // const [error,setError] = useState({})

  // const getUser = async (username) => {

  //  try {
  //   const fetchUser = `https://api.github.com/users/${username}`;
  
  //   const fetching = await fetch(fetchUser);
  
  //   const json = await fetching.json();

  //   setData(json)
  
  //   console.log(json)
  //  } catch (error) {
  //   setError(error)
  //   setData(null)
  //  }
  // };

  // useEffect(()=>{

  //  getUser(username)

  // },[username])

  const {data, error, status} = useGitubUser({username})
  return (
    <>
    {!status && <h1>Loading...</h1>}
    {status === 200 ? <h1>{data.login}</h1> : <h1>{error.message}</h1>}
    </>
  );
}
