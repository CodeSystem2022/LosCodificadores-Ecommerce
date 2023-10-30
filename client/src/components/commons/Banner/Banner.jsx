import "./Banner.css";
import useHandleBanner from "../../../hooks/useHandleBanner";
import arrow from "../../../assets/icons/arrow.png";

const Banner = ({ images }) => {
  const { selected, setSelected, incrementSelected, decrementSelected } =
    useHandleBanner(images.length - 1, 4000);
  return (
    <section className="bannerContainer">
      <div className="bannerButtonsContainer">
        <button onClick={decrementSelected}>
          <img src={arrow} />
        </button>
        <button onClick={incrementSelected} className="right">
          <img src={arrow} />
        </button>
      </div>
      {images.map((image) => (
        <>
          <img
            src={image.img}
            alt="background"
            className={image.id === selected ? "banner selected" : "banner"}
          />
        </>
      ))}
      <div className="bannerBulletContainer">
        {images.map((image) => (
          <div
            key={image.id}
            className={image.id === selected ? "bullet selected" : "bullet"}
            onClick={() => setSelected(image.id)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
