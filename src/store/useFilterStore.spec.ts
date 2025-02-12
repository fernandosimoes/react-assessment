import { filterState } from "./useStore";

describe("filterStore Zustand Store", () => {
  beforeEach(() => {
    // Resetar o estado antes de cada teste
    filterState.setState({
      gender: "",
      name: "",
      ageRange: [0, 100],
    });
  });

  test("deve ter o estado inicial correto", () => {
    const state = filterState.getState();

    expect(state.gender).toBe("");
    expect(state.name).toBe("");
    expect(state.ageRange).toEqual([0, 100]);
  });

  test("deve atualizar o gênero corretamente", () => {
    filterState.getState().setGender("male");

    expect(filterState.getState().gender).toBe("male");
  });

  test("deve atualizar o nome corretamente", () => {
    filterState.getState().setName("John Doe");

    expect(filterState.getState().name).toBe("John Doe");
  });

  test("deve atualizar a faixa etária corretamente", () => {
    filterState.getState().setAgeRange([20, 60]);

    expect(filterState.getState().ageRange).toEqual([20, 60]);
  });
});
