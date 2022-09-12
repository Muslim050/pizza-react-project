import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="144" cy="132" r="120" />
      <rect x="1" y="272" rx="7" ry="7" width="280" height="26" />
      <rect x="-1" y="312" rx="7" ry="7" width="280" height="84" />
      <rect x="7" y="418" rx="8" ry="8" width="94" height="31" />
      <rect x="136" y="408" rx="18" ry="18" width="140" height="47" />
    </ContentLoader>
  );
}

export default LoadingBlock;
