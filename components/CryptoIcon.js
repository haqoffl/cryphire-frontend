// app/components/CryptoIcon.js
const CryptoIcon = ({ symbol, size = 24 }) => {


  return (
    <div>
      <img src={"https://cryptofonts.com/img/SVG/usdc.svg"} alt={`${symbol} icon`} width={size} height={size} />
    </div>
  );
};

export default CryptoIcon;
