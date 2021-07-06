import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

function GoogleData() {
    const [data, setData] = useState({}); 
    useEffect(() => {
        Tabletop.init({
          key: "1RJsXxEsLsfswmZDqJIe8j7iLhqvFAc1igT3pGJHoa2I",
          simpleSheet: true,
        }).then(function (data) {
          setData(data);
        });
      }, []);
    const movies = Array.from(data);  
    return (
        <div>
          {movies.map((el) => (
            <p key={el.item}>
              {el.item} - {el.value}
            </p>
          ))}
        </div>
      );
  }
  export default GoogleData;

  