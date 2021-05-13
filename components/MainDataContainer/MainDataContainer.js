// import { get, onSnapshot, db } from '../../_config/firebase/firestore.methods';
import {useOnSnapShotData} from '../../utils/hooks';

import ContentCard from '../ContentCard/ContentCard';


const MainDataContainer = ({ data }) => {

  const [collection] = useOnSnapShotData(data);

  // console.log(collection);

  return (
    <>

      {!!collection.generic &&
        <section className="table">
          <i className={collection.generic.icon}></i>

          <i className='icon-playlist_add actions-item add-icon'></i>
          {/* <i className='icon-playlist_add actions-item add-icon' onClick={() => collection.createItem()}></i> */}

          <div className="container-detail">
            <h2>{collection.generic.title}</h2>
            {Object.keys(collection.list).map((key, index) => {
              const item = collection.list[key];
              return <article key={index}>
                <ContentCard item={item} removeItem={collection.removeItem} />
                </article>
            })}
          </div>
        </section>
      }

      {/* {
        Object.keys(collection.list).map(key => {
          const ele = collection.list[key];
          console.log(ele);
          return (
            <div key={key}>
              {!!ele.details && <p>{ele.details.id}</p>}
            </div>
          )
        }
        )
      } */}
    </>
  )
}

export default MainDataContainer;