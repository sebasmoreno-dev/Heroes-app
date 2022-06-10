import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img src={ imagePath } className="card-img-top" alt={superhero} />
          </div>
          <div className="col-8">

            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {
                ( alter_ego !== characters ) &&
                  <p className="card-text">{characters}</p>
              }

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/heroes/${id}`} className="btn btn-primary">
                More Info
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default HeroCard