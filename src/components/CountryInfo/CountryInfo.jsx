import { Link, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4, v4 } from "uuid";
const CountryInfo = () => {
  const state = useLocation();
  const lang = Object.keys(state.state.languages)[0];
  const key = Object.keys(state.state.name.nativeName)[0];
  const cur = Object.keys(state.state.currencies)[0];

  const navigate = useNavigate();

  return (
    <div className="country__info__wrapper">
      <button onClick={() => navigate("/")}>Back</button>

      <div className="country__info__container">
        <div className="country__info-img">
          <img src={state.state.flags.png} alt="" />
        </div>

        <div className="country__info">
          <h3>{state.state.name.common}</h3>

          <div className="country__info-left">
            <h5>
              Native Name:{" "}
              <span>{state.state.name.nativeName[key].common}</span>
            </h5>
            <h5>
              Population: <span>{state.state.population}</span>
            </h5>

            <h5>
              Region: <span>{state.state.region}</span>
            </h5>
            <h5>
              Subregion: <span>{state.state.subregion}</span>
            </h5>
            <h5>
              Capital: <span>{state.state.capital}</span>
            </h5>
            <h5>
              Currencies: <span>{state.state.currencies[cur].name}</span>
            </h5>
            <h5>
              Languages: <span>{state.state.languages[lang]}</span>
            </h5>

            {state.state.borders ? (
              <h5>
                Borders Countries:{" "}
                <div>
                  {state.state.borders.map((border) => (
                    <button key={uuidv4()}>{border}</button>
                  ))}
                </div>
              </h5>
            ) : (
              <h5>No Borders</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
