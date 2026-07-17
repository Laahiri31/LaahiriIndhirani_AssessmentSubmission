const API =
  "https://serverless-api-teal.vercel.app/api/auth/signin";

export const login = async (email, password) => {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return await response.json();
};