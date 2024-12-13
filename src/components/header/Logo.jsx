import LogoImage from "../../assets/logo.svg";
function Logo() {
  return (
    <div>
      <a href="./index.html">
        <img className="h-9" src={LogoImage} alt="Weather App" />
      </a>
    </div>
  );
}

export default Logo;
