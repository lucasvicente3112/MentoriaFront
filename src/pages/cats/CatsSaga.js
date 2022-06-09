import { call, put } from "redux-saga/effects";
import { fraseCarregada } from "./CatsActions";

export function* loadFrase() {
  console.log("antesTRY");
  try {
    const response = yield call(handleSearchCatFact);
    console.log(response);
    yield put(fraseCarregada(response.fact));
  } catch (error) {
    console.log(error);
  }
}

async function handleSearchCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  return await response.json();
  //setCat((old) => ({ ...old, fact: data.fact }));
}
