import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const [data, setData] = useState({}); 
    useEffect(() => {
        Tabletop.init({
          key: "1RJsXxEsLsfswmZDqJIe8j7iLhqvFAc1igT3pGJHoa2I",
          simpleSheet: true,
        }).then(function (data) {
          setData(data);
        });
      }, []);
  const googleData = Array.from(data);  
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-64 pb-32 pt-32">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {googleData.map((el) => (
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <CardStats
                    statSubtitle={el.statSubtitle}
                    statTitle={el.statTitle}
                    statArrow={el.statArrow}
                    statPercent={el.statPercent}
                    statPercentColor={el.statPercentColor}
                    statDescripiron={el.statDescripiron}
                    statIconName={el.statIconName}
                    statIconColor={el.statIconColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
