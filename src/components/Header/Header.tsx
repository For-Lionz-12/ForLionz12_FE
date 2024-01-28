import { Link, useLocation, useNavigate } from "react-router-dom";
import { IHeader } from "./types";
import * as Styled from "./style";
import Profile from "../Profile/Profile";
import tmp from "../../assets/imgs/tmpprofile.jpeg";
import Typo from "../Typo/Typo";

function Header({ type }: IHeader) {
  const isLoginPage = Boolean(type);
  const navigate = useNavigate();
  // const isAuthenticated = useAuth();

  const { pathname } = useLocation();

  const 마이페이지가기 = () => {
    navigate("/profile");
  };

  return (
    <Styled.Wrapper type={type}>
      <Styled.navcol>
        <Link to="/">
          <Styled.logo>LIONZ</Styled.logo>
        </Link>
        {!isLoginPage && (
          <>
            <Link to="/notification">
              <Typo
                color={pathname === "/notification" ? "darkblue" : "black"}
                weight="600"
              >
                Notification
              </Typo>
            </Link>
            <Link to="/homework">
              <Typo
                color={pathname === "/homework" ? "darkblue" : "black"}
                weight="600"
              >
                Assignment
              </Typo>
            </Link>
            <Link to="/qna">
              <Typo
                color={pathname === "/qna" ? "darkblue" : "black"}
                weight="600"
              >
                Q&A
              </Typo>
            </Link>
            <Link to="/contact">
              <Typo
                color={pathname === "/contact" ? "darkblue" : "black"}
                weight="600"
              >
                Contact
              </Typo>
            </Link>
          </>
        )}
      </Styled.navcol>
      <Styled.headerprofile
        onClick={마이페이지가기}
        show={!isLoginPage ? true : false}
      >
        <Profile url={tmp} size="50" />
      </Styled.headerprofile>
    </Styled.Wrapper>
  );
}

export default Header;
