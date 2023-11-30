import { useAnimate } from "../hooks";

const ImageComp = ({ animateName, image, alt, thres }) => {
  const { detectedRef, isObserve } = useAnimate(thres);

  return (
    <img
      ref={detectedRef}
      className={`w-96 ${isObserve && `animate__animated ${animateName}`}`}
      src={`./images/${image}`}
      alt={`${alt}`}
    />
  );
};

export default ImageComp;
