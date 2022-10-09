import Button from "./Button";

const GetAQuote = ({ className = "" }) => {
  return (
    <div className={"w-full text-center " + className}>
      <a href="#" className="btn btn-lg btn-ghost gap-2 font-normal text-2xl tracking-widest">
        GET A QUOTE
      </a>
      <div className="flex justify-center gap-3 mt-2">
        <img className="w-20 " src="img/flower.svg" />
        <img className="w-14" src="img/flower.svg" />
        <img className="w-20 " src="img/flower.svg" />
        <img className="w-14" src="img/flower.svg" />
      </div>
    </div>
  );
};

export default GetAQuote;
