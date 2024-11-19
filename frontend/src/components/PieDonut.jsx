import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/dataFetch";

const PieDonut = () => {
  const { GetData } = useContext(DataContext);
  const [fetchedData, setFetchedData] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // To track if the button is clicked

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData();
      setFetchedData(data);
    };

    fetchData();
  }, [GetData]); // Fetch data on component mount

  const handleOnClick = () => {
    setShowDetails(true); // Change state when button is clicked
  };

  return (
    <figure className="charts">
      <div className="pie donut">
        <button className="btn-3d" onClick={handleOnClick}>
          {showDetails ? (
            fetchedData ? (
              <div className="name">
                OxyTrack <br />
                {fetchedData.oxygenLevel}
              </div>
            ) : (
              <div className="name">Loading...</div>
            )
          ) : fetchedData ? (
            <span>{fetchedData.percentage}</span>
          ) : (
            <div className="name">OxyTrack</div>
          )}
        </button>
      </div>
    </figure>
  );
};

export default PieDonut;
