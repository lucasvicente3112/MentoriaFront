import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export const Users = () => {
  useEffect(() => {
    obterUsuarios();
  }, []);

  const [usuarios, setUsuarios] = useState([]);

  async function obterUsuarios() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
    setUsuarios(data);
  }
  return (
    <div>
      <ul>
        {usuarios.map((usuario) => (
          <Card
            key={usuario.id}
            image={usuario.avatar_url}
            description={usuario.login}
          />
        ))}
      </ul>
    </div>
  );
};
