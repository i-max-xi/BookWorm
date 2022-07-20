import { FETCH_ROCKET } from "../Redux/Rockets/RocketSlice";
import { FETCH_MISSIONS } from "../Redux/Missions/MissionSlice";
import rocketsReducer from "../Redux/Rockets/RocketSlice";
import missionsReducer from "../Redux/Missions/MissionSlice";

describe("Reducers", () => {
  test("Should return new state when receiving the type FETCH_ROCKETS", () => {
    const rockets = [
      { rocket: "Falcon 1" },
      { rocket: "Falcon 2" },
      { rocket: "Falcon 3" },
    ];
    const newState = rocketsReducer([], {
      type: FETCH_ROCKET,
      rockets,
    });
    expect(newState).toEqual(rockets);
  });

  test("Should return new state when receiving the type FETCH_MISSIONS", () => {
    const missions = [
      {
        description:
          "Asia Satellite Telecommunications Holdings Limited known as its brand name AsiaSat is a commercial operator of communication spacecraft. AsiaSat is based in Hong Kong but incorporated in Bermuda.",
      },
      {
        description:
          "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues.",
      },
      {
        description:
          "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.",
      },
    ];
    const newState = missionsReducer([], {
      type: FETCH_MISSIONS,
      missions,
    });
    expect(newState).toEqual(missions);
  });
});
