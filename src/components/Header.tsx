import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { type FC } from "react";

import useLocalStorageState from "../hooks/useLocalStorageState";

interface User {
  iss: string;
  sub: string;
  azp: string;
  aud: string;
  iat: string;
  exp: string;
  email: string;
  email_verified: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
}

const Header: FC = () => {
  const [credential, setCredential] = useLocalStorageState(null, "credential");
  const user: User | null = credential !== null ? jwt_decode(credential) : null;

  return (
    <header className="header">
      {credential === null ? (
        <div className="logged-out">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              setCredential(credentialResponse.credential);
            }}
          />
        </div>
      ) : (
        <div className="logged-in">
          <button
            className="logout-button"
            onClick={() => {
              setCredential(null);
            }}
          >
            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            Log Out
          </button>
          {user !== null && (
            <>
              <p className="username">{user.name}</p>
              <img
                src={user.picture}
                alt="User's avatar"
                className="user-avatar"
              />
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
