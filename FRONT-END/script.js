const url = "http://localhost:3000";

async function main() {
  try {
    const response = await fetch(`${url}/mahasiswa`);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error fetching mahasiswa data:", error);
  }
}

async function login(username, password) {
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
    const json = await response.json();
    if (response.status >= 400) {
      return alert(json.message);
    }
    console.log(json);
    alert("Berhasil Login");
    localStorage.setItem("username", username);
    localStorage.setItem("token", json.token);
    localStorage.setItem("password", json.password);
    return json;
  } catch (error) {
    console.error("Error during login:", error);
  }
}

async function register(username, password) {
  try {
    const response = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
    const json = await response.json();
    if (response.status >= 400) {
      return alert(json.message);
    }
    alert("Berhasil Register");
    console.log(json);
    return json;
  } catch (error) {
    console.error("Error during registration:", error);
  }
}