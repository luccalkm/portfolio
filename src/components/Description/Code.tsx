import { DevData } from "../../types/descriptionTypes";

interface ICodeProps {
  devData: DevData;
}

import React from "react";

export function Code({ devData }: ICodeProps): JSX.Element {
  const ColoredSpan = ({
    className,
    children,
  }: {
    className: string;
    children: React.ReactNode;
  }) => {
    return <span className={className}>{children}</span>;
  };

  const renderValue = (value: string | number | string[]) => {
    if (typeof value === "string") {
      return <ColoredSpan className="text-yellow-600">"{value}"</ColoredSpan>;
    }
    if (typeof value === "number") {
      return <ColoredSpan className="text-green-300">{value}</ColoredSpan>;
    }
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <span key={index}>
          {renderValue(item)}
          {index < value.length - 1 ? ", " : ""}
        </span>
      ));
    }
  };

  return (
    <div className="w-full bg-slate-900 p-4 font-mono rounded-md box-border">
      <div className="w-full h-68 text-white">
        <ColoredSpan className="text-gray-500">1 |</ColoredSpan>{" "}
        <ColoredSpan className="text-purple-400">let</ColoredSpan>{" "}
        <ColoredSpan className="text-blue-400">luccaMotta</ColoredSpan>{" "}
        <span className="text-white">{"= {"}</span>
        <br />
        <div className="ml-4">
          {Object.entries(devData).map(([key, value], index) => (
            <div key={key}>
              <ColoredSpan className="-ml-4 mr-4 text-gray-500">{index+2} |</ColoredSpan>{" "}
              <ColoredSpan className="text-blue-400">{key}</ColoredSpan>:{" "}
              {(key !== 'name' && key !== 'age') && <ColoredSpan className="text-purple-400">{"["}</ColoredSpan>}
              {renderValue(value)}
              {(key !== 'name' && key !== 'age') && <ColoredSpan className="text-purple-400">{"]"}</ColoredSpan>}
              {index < Object.keys(devData).length - 1 ? "," : ""}
              <br />
            </div>
          ))}
        </div>
        <ColoredSpan className="mr-2 text-gray-500">9 |</ColoredSpan>{" "}
        <span className="text-white">{"}"};</span>
      </div>
    </div>
  );
}
