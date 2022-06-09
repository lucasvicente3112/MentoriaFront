const estadoInicial = {
  humor: "",
  imagem: "",
  frase: "",
};

const CatsReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case "alterarHumor":
      return { ...state, humor: action.data.humor, imagem: action.data.imagem };

    case "fraseCarregada":
      return { ...state, frase: action.data };

    default:
      return state;
  }
};

export default CatsReducer;
