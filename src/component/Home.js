import React, { useState } from "react";
import { Link } from "react-router-dom";
import Packages from "./Packages";
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelection = (selectedPackage) => {
    setSelectedPackage(selectedPackage);
  };

  const referralLink = 'https://yourapp.com/referral'; // Replace with your actual referral link

  const shareOnSocialMedia = (platform) => {
    const socialMediaLinks = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${referralLink}`,
      twitter: `https://twitter.com/intent/tweet?url=${referralLink}`,
      linkedin: `https://www.linkedin.com/shareArticle?url=${referralLink}`,
      whatsapp: `whatsapp://send?text=${referralLink}`,
      telegram: `https://t.me/share/url?url=${referralLink}`,
      // Add more social media platforms here
    };

    if (socialMediaLinks[platform]) {
      window.open(socialMediaLinks[platform], '_blank');
    }
  };

  return (
    <div className="home-container">
      <h1 id="welcome-heading">Welcome to Your Home Page</h1>
      {selectedPackage ? (
        <div className="selected-package">
          <h2>
            You've selected: {selectedPackage.name} - KSH{" "}
            {selectedPackage.amount}
          </h2>
          <input type="text" value={referralLink} readOnly id="referral-link" />
          <button onClick={() => shareOnSocialMedia('facebook')}>Share on Facebook</button>
          <button onClick={() => shareOnSocialMedia('twitter')}>Share on Twitter</button>
          <button onClick={() => shareOnSocialMedia('linkedin')}>Share on LinkedIn</button>
          <button onClick={() => shareOnSocialMedia('whatsapp')}>Share on WhatsApp</button>
          <button onClick={() => shareOnSocialMedia('telegram')}>Share on Telegram</button>
          {/* Add more buttons for other platforms */}
        </div>
      ) : (
        <Packages handlePackageSelection={handlePackageSelection} />
      )}
    </div>
  );
};

export default Home;
