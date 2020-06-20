export const isEmpty = (string) => {
  return !string || !string.toString().trim();
};

export const getToken = (req) => {
  if (Strings.isEmpty(req.headers.cookie)) {
    return null;
  }

  return req.headers.cookie.replace(
    /(?:(?:^|.*;\s*)WEB_SERVICE_SESSION_KEY\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
};
