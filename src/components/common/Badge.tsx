interface Props {
  text: string;
  color: string;
  className: string;
  inverted: boolean;
}

export const Badge = ({ className, text, color, inverted }: Props) => {
  const mainStyle = inverted
    ? `rounded-md p-2 border border-${color}-400 text-${color}-400 font-bold`
    : `rounded-md p-2 bg-${color}-400 text-${color}-800 font-bold`;

  return (
    <div
      className={`${className} ${mainStyle}`}
    >
      {text}
    </div>
  );
};
