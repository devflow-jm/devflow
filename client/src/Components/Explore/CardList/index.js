import React from "react";
import { Row, Col } from "reactstrap";
import cn from "classnames";
import { alignments as align } from "../../../Constants/alignments";
import { Switch, Route, Link } from "react-router-dom";

import Card from "../Card";
import exploreArray from "../exploreArray";

// function cardRoutes = ({match}) => {
//   const explorePage = exploreArray.find(exploreArray => {
//     return explore.id
//   })
// }

function createCard(explore) {
  return (
    <Card
      key={explore.id}
      title={explore.title}
      description={explore.description}
      link={`explore/details/${explore.id}`}
    />
  );
}

const CardList = loading => {
  //   if (loading) {
  //     return <h2>Loading...</h2>;
  //   }

  return <React.Fragment>{exploreArray.map(createCard)}</React.Fragment>;
};

export default CardList;

// <div />
//   {.map(object => {
//     return (
//       <div className={classNames(["col-xs-12"], ["col-sm-6"])}>

//       </div>
//     );
//   })}
// </div>;

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);
