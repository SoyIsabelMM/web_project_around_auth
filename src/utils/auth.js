const BASE_URL = "https://register.nomoreparties.co";

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/singup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al registrarse: ${response.status}`);
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/singin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
