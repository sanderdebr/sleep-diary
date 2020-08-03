import * as Constants from "~/src/common/constants";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const jwt = cookies.get(Constants.session.key);

if (jwt) {
  cookies.remove(Constants.session.key, { path: "/" });
}

window.location.href = "/";
