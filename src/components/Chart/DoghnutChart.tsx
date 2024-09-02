import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IDougnutChartProps {
  data: {
    watchedVideo: number;
    unwatchedVideo: number;
  };
}

const DoughnutChart: React.FC<IDougnutChartProps> = ({ data }) => {
  const chartData = [
    {
      label: "Remaining",
      value: data.unwatchedVideo,
      color: "rgb(255 3 3)",
      cutout: "50%",
    },
    {
      label: "Completed",
      value: data.watchedVideo,
      color: "rgb(57 183 5)",
      cutout: "50%",
    },
  ];

  const options: any = {
    plugins: {
      responsive: true,
    },
    cutout: chartData.map((item) => item.cutout),
  };

  const finalData = {
    labels: chartData.map((item) => item.label),
    datasets: [
      {
        data: chartData.map((item) => Math.round(item.value)),
        backgroundColor: chartData.map((item) => item.color),
        borderColor: chartData.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(chartData.length).fill(true),
      },
    ],
  };

  return (
    <div>
      <p>Course progress tracker</p>
      <Doughnut data={finalData} options={options} />
    </div>
  );
};

export default DoughnutChart;
