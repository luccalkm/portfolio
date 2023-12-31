import { Line } from "react-chartjs-2";
import loadingImage from "../../assets/loading.json";
import Lottie from "lottie-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend,
  Filler
);

interface Props {
  labels: string[];
  counts: number[];
  loading: boolean;
  title: string;
}

export const AreaChart = ({ title, labels, counts, loading }: Props) => {
  const graphSize = "w-96 h-96";

  if (loading) {
    return (
      <div className={`flex justify-center items-center ${graphSize}`}>
        <Lottie className="w-full h-full" animationData={loadingImage} />
      </div>
    );
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Quantidade de commits",
        data: counts,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
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
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={`${graphSize}`}>
      <Line data={data} options={options} />
    </div>
  );
};
