import ImageComp from "./ImageComp";

const A = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <ImageComp
        thres={0}
        image="cat-sleeping.png"
        alt="sleeping cat"
        animateName="animate__fadeInDown animate__slow"
      />
      <div className="mt-12 text-3xl animate__animated animate__flash animate__slower animate__infinite">
        Zzz....
      </div>
    </div>
  );
};

export default A;
