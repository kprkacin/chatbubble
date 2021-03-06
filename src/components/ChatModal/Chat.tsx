import { Message } from "./Message";
import { TextField } from "./TextField";

export const Chat: React.FC<ChatProps> = (props) => {
  return (
    <div className=" bg-slate-100 h-[70vh] border rounded-lg">
      <div className="flex flex-col h-full justify-between">
        <div className="px-5 py-2">
          <Message sent={false} />
          <Message sent={true} />
          <Message sent={false} />
          <Message sent={true} />
        </div>
        <div className="w-full">
          <TextField />
        </div>
      </div>
    </div>
  );
};

export interface ChatProps {}
