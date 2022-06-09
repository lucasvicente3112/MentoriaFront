export function alterarHumor(catHumor) {
  return {
    type: "alterarHumor",
    data: catHumor,
  };
}

export function carregarFrase() {
  return {
    type: "carregarFrase",
  };
}

export function fraseCarregada(frase) {
  return {
    type: "fraseCarregada",
    data: frase,
  };
}
