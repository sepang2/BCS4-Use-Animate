import ImageComp from "./ImageComp";

const B = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <ImageComp
        thres={0.9}
        image="cat-shocked.png"
        alt="shocked cat"
        animateName="animate__heartBeat"
      />
      <div className="mt-12 text-3xl animate__animated animate__shakeY animate__fast animate__infinite">
        !!!!!!!!!!!!
      </div>
    </div>
  );
};

export default B;
