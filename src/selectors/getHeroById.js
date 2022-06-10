import { heroes } from "./../data/heroes";


const getHeroById = ( id = '') => {

  // const validIds = heroes.map( hero => hero.id );
  // if( !validIds.includes(id)) {
  //   throw new Error(`Invalid id: ${id}`);
  // }

  return heroes.find( hero => hero.id === id );
}

export default getHeroById;