import React, { useState } from "react";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { Contador } from "../Counter";
import { useDispatch, useSelector } from "react-redux";
import { alterarHumor, carregarFrase } from "./CatsActions";

export const images = {
  sad: "https://i.pinimg.com/564x/35/2a/af/352aaf0c927f25a70a50965ab75ad912.jpg",
  nice: "https://i.pinimg.com/originals/11/49/78/1149788942525040983d3a1a479f8711.jpg",
  angry:
    "https://i.pinimg.com/originals/5f/5f/18/5f5f182deb95e0af82473bdcc9a2eb72.jpg",
  bodybuilder:
    "https://i.pinimg.com/564x/5c/a1/42/5ca142d34fd1903773b4f4e6f43d9045.jpg",
  jururu:
    "https://filmdaily.co/wp-content/uploads/2020/05/coughing-cat-meme-lede.jpg",
};

export const catHumors = ["sad", "nice", "angry", "bodybuilder", "jururu"];

export const Cats = () => {
  //   const [humor, setHumor] = useState({
  //     humor: catHumors[0],
  //     imagem: images.sad,
  //   });
  //   const history = useNavigate();
  //   function handleNavigateToContador() {
  //     history("/counter");
  //   }
  const dispatch = useDispatch();

  function trocarHumor(humorSelecionado) {
    const humorAlterado = {
      humor: humorSelecionado,
      imagem: images[humorSelecionado],
    };
    dispatch(alterarHumor(humorAlterado));
  }

  function buscaFrase() {
    dispatch(carregarFrase());
  }
  const catHumor = useSelector((state) => state.cats);
  console.log("estado", catHumor);
  return (
    <div>
      <Card image={catHumor.imagem} description={catHumor.humor} />
      {catHumors.map((Cats) => (
        <button onClick={() => trocarHumor(Cats)}>{Cats}</button>
      ))}
      <button onClick={() => buscaFrase()}>Frase do dia!</button>
      <h2>{catHumor.frase}</h2>
    </div>
  );
};
