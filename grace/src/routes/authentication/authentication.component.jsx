import Signin from "components/authentication_components/signin/signin_section.component";
import "./authentication.styles.scss";

function Authentication({saveUserInformation}) {
  return (
    <div className="authentication-container">
      <Signin saveUserInformation={saveUserInformation} />
    </div>
  );
}

export default Authentication;
