import { loginRequest, profileRequest } from "../api/auth";
import { useCreateAuthStore } from "../store/auth";
import styles from "./pages.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const setToken = useCreateAuthStore((state) => state.setToken);
  const token = useCreateAuthStore((state) => state.token);
  const setProfile = useCreateAuthStore((state) => state.setProfile);
  const profile = useCreateAuthStore((state) => state.profile);
  // const handleLogout = () => {
  //   localStorage.removeItem('auth')

  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    console.log(email, password);

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.profile);
  };
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          className={styles.thor}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4fe006ef-2ed2-48d6-a5b4-362d5fd1a399/de8gvqq-6175e6fa-0820-48ef-b06a-f1859c011b20.png/v1/fill/w_1280,h_1993/thor__marvel_comics____classic_version_by_alonik_de8gvqq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk5MyIsInBhdGgiOiJcL2ZcLzRmZTAwNmVmLTJlZDItNDhkNi1hNWI0LTM2MmQ1ZmQxYTM5OVwvZGU4Z3ZxcS02MTc1ZTZmYS0wODIwLTQ4ZWYtYjA2YS1mMTg1OWMwMTFiMjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tBpG-hJzsmeQDKrLcmtZs38uWRHJBkdWDdi01IXruFw"
        />
      </div>
      <form onSubmit={handleSubmit} className="form-group">
        <h3>Your Data Here</h3>
        <input
          type="email"
          placeholder="youremail@mail.com"
          className="form-control"
        />
        <input type="password" placeholder="*******" className="form-control" />
        <button className="btn btn-danger">Login</button>
        <button className="btn btn-success">Delete Token</button>
        <Link className="btn btn-warning" to="/">
          BACK OFF!!
        </Link>
        {token && profile && (
          <>
            <h3 className={styles.token}>
              <span
                style={{
                  color: "#dc3545",
                  textShadow: "0,5px 1px 1px #692e57 ",
                  fontSize: "20px",
                }}
              >
                My Token retrieved from Zustand Store is:
              </span>
              {token}
            </h3>
            <h3>{profile.message}</h3>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
