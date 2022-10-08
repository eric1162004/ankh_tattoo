import Button from './Button';

const GetAQuote = ({className=""}) => {
  return (
    <div className={"my-10 w-full text-center " + className}>
      <Button href="#">GET A QUOTE</Button>
    </div>
  );
};

export default GetAQuote;