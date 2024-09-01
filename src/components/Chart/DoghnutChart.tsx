import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = [
    {
      label: "Remaining",
      value: 55,
      color: "rgb(255 3 3)",
      cutout: "50%",
    },
    {
      label: "Completed",
      value: 15,
      color: "rgb(57 183 5)",
      cutout: "50%",
    },
  ];

  const options: any = {
    plugins: {
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
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
