export const Message: React.FC<MessageProps> = (props) => {
  const { sent } = props;
  const css = sent ? "bg-sky-500" : "bg-slate-200";
  return (
    <div className="mt-1 max-w-[75%]">
      <p className={`py-4 break-before-auto max-w-fit w-max rounded-md ${css}`}>
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
