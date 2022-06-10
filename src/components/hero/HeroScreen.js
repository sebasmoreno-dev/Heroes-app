import { Navigate, useParams } from "react-router-dom";
import getHeroById from "./../../selectors/getHeroById";


export const HeroScreen = () => {

  const { heroeId } = useParams();

  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Navigate to='/' />
  }

  return (
    <>
      <h1>Hero Screen</h1>
        <p>
          {hero.superhero}
        </p>
      <div></div>
    </>
  )
}
