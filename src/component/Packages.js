// Packages.js
import React, { useState } from 'react';
import './package.css'; // Import the CSS file

const Packages = ({ handlePackageSelection }) => {
  const packages = [
    { id: 1, name: 'Package 1', amount: 250 },
    { id: 2, name: 'Package 2', amount: 500 },
    { id: 3, name: 'Package 3', amount: 1000 },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectPackage = (packageId) => {
    const selected = packages.find((pkg) => pkg.id === packageId);
    setSelectedPackage(selected);
  };

  const handleSubmit = () => {
    if (selectedPackage) {
      handlePackageSelection(selectedPackage);
    }
  };

  return (
    <div className="package-container"> {/* Add a container class */}
      <h2 className="package-title">Choose a Package</h2> {/* Add a title class */}
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id} className="package-item"> {/* Add a class for each package item */}
            <label>
              <input
                type="radio"
                name="package"
                value={pkg.id}
                onChange={() => handleSelectPackage(pkg.id)}
                checked={selectedPackage && selectedPackage.id === pkg.id}
              />
              {pkg.name} - KSH {pkg.amount}
            </label>
          </li>
        ))}
      </ul>
      <button className="proceed-button" onClick={handleSubmit}>Proceed</button> {/* Add a class for the proceed button */}
    </div>
  );
};

export default Packages;

