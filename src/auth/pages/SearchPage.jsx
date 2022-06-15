import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import HeroCard from './../components/hero/HeroCard';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // const showSearch = (q.length === 0);

  const { q =  '' } = queryString.parse(location.search);


  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFileted = useMemo (() => getHeroesByName(q), [q]);



  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={ handleSearch }>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar un héroe"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Buscar...
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

            {
              (q === '')
                ? <div className="alert alert-info">Buscar un héroe</div>
                : ( heroesFileted.length === 0 )
                  && <div className="alert alert-danger">No hay resultados: { q } </div>

            }


            { heroesFileted.map(hero => (
              <HeroCard
                key={ hero.id }
                { ...hero }
              />
            )) }
        </div>
      </div>
    </>
  )
}

export default SearchScreen;