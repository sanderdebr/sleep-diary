export const isEmpty = (string) => {
  return !string || !string.toString().trim();
};

export const getToken = (req) => {
  if (isEmpty(req.headers.cookie)) {
    return null;
  }

  return req.headers.cookie.replace(
    /(?:(?:^|.*;\s*)WEB_SERVICE_SESSION_KEY\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
};

export const parseAuthHeader = (value) => {
  if (typeof value !== "string") {
    return null;
  }

  const matches = value.match(/(\S+)\s+(\S+)/);
  return matches && { scheme: matches[1], value: matches[2] };
};

export const pathToTitle = (path) => {
  if (path instanceof Object || path instanceof Array) {
    return JSON.stringify(path);
  }

  const arr = path.split("/");
  const title = arr[arr.length - 1].split("");
  title[0] = title[0].toUpperCase();

  return title;
};
