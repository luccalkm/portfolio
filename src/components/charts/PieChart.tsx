import { Pie } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  Title as ChartTitle,
} from "chart.js";
import Lottie from "lottie-react";
import loadingImage from "../../assets/loading.json";

Chart.register(ArcElement, Tooltip, Legend, ChartTitle);

interface Props {
  content: { [key: string]: number };
  loading: boolean;
  title: string;
}

export const PieChart = ({ title, content, loading }: Props) => {
  const graphSize = "w-96 h-96";

  if (loading)
    return (
      <div className={`flex justify-center items-center ${graphSize}`}>
        <Lottie className="w-full h-full" animationData={loadingImage} />
      </div>
    );

  const data = {
    labels: Object.keys(content),
    datasets: [
      {
        data: Object.values(content),
        backgroundColor: [
          "#7daedc",
          "#ff7474",
          "#f8e287",
          "#f5a623",
          "#a3d977",
          "#b07ad9",
        ],
        borderColor: ["#000000"],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        enabled: true,
        position: "nearest",
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          family: "Fira code",
        },
        color: "#ffffff",
      },
    },
  };

  return (
    <div className="bg-slate-700 rounded-md p-4 flex justify-center items-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className={`${graphSize}`}>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
