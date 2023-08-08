// Home.js
import React, { useState } from "react";
import Packages from "./Packages";

const Home = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelection = (selectedPackage) => {
    setSelectedPackage(selectedPackage);
  };

  const handleProceed = () => {
    if (selectedPackage) {
      // Do any additional processing you need before redirecting to the homepage
      console.log("Selected Package:", selectedPackage);
      // Redirect to the homepage or any other action you want to take
    }
  };

  return (
    <div>
      <h1>Welcome to Your Home Page</h1>
      {selectedPackage ? (
        <div>
          <h2>
            You've selected: {selectedPackage.name} - KSH{" "}
            {selectedPackage.amount}
          </h2>
          <button onClick={handleProceed}>Proceed to Homepage</button>
        </div>
      ) : (
        <Packages handlePackageSelection={handlePackageSelection} />
      )}
    </div>
  );
};

export default Home;
