import ImageComp from "./ImageComp";

const C = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <ImageComp
        thres={0.9}
        image="cat-angry.png"
        alt="sleeping cat"
        animateName="animate__tada"
      />
      <div className="mt-12 text-3xl animate__animated animate__tada animate__fast animate__infinite">
        Krrrrrrr...!
      </div>
    </div>
  );
};

export default C;
