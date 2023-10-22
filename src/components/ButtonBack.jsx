import Button from "./Button";

const ButtonBack = () => {
  return (
    <Button
      type={"back"}
      oncClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
};

export default ButtonBack;
