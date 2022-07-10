export const Message: React.FC<MessageProps> = (props) => {
  const { sent } = props;
  const css = sent ? "bg-sky-500" : "bg-slate-200";
  return (
    <div className={` mt-2 flex ${sent ? "justify-start" : "justify-end"}`}>
      <p
        className={`px-4 text-inherit max-w-[85%] py-4 w-max rounded-md ${css}`}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.{" "}
      </p>
    </div>
  );
};

export interface MessageProps {
  sent: boolean;
}
