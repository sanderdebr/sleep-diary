export const runQuery = async ({ queryFn, errorFn, label }) => {
  let response;
  try {
    response = await queryFn();
  } catch (err) {
    response = errorFn(err);
  }

  console.log("[db-query]", { query: label });
  return response;
};
