import Button from './Button';

const GetAQuote = ({className=""}) => {
  return (
    <div className={"my-10 w-full text-center " + className}>
      <Button href="#">GET A QUOTE</Button>
      <div className="flex justify-center gap-3 mt-8">
              <img className="w-20 " src="img/flower.svg" />
              <img className="w-14" src="img/flower.svg" />
              <img className="w-20 " src="img/flower.svg" />
              <img className="w-14" src="img/flower.svg" />
            </div>
    </div>
  );
};

export default GetAQuote;