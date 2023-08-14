import React from 'react';

const HomePage = () => {
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
    <div>
      <h1>Welcome to Your App</h1>
      <p>Share your referral link with others:</p>
      <input type="text" value={referralLink} readOnly />
      <button onClick={() => shareOnSocialMedia('facebook')}>Share on Facebook</button>
      <button onClick={() => shareOnSocialMedia('twitter')}>Share on Twitter</button>
      <button onClick={() => shareOnSocialMedia('linkedin')}>Share on LinkedIn</button>
      <button onClick={() => shareOnSocialMedia('whatsapp')}>Share on WhatsApp</button>
      <button onClick={() => shareOnSocialMedia('telegram')}>Share on Telegram</button>
      {/* Add more buttons for other platforms */}
    </div>
  );
};

export default HomePage;