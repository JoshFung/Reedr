import "./BottomMessage.css";

const BottomMessage = (props: { message: string }) => {
  return (
    <div className="bottomMessageContainer">
      <h1 className="bottomMessageText">{props.message}</h1>
    </div>
  );
};

export default BottomMessage;
