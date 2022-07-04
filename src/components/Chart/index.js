import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import styled from "styled-components";
import { months } from "../../utils/chart";
import { useWindowSize } from "../../hook";

const ChartWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  padding: 18px 20px 20px 31px;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

const CanvasWrapper = styled.div`
  position: relative;
  margin: auto;
  height: 60vh;
  width: 80vw;

  @media (max-width: 767px) {
    width: 80vw;
    height: 250px;
  }
`;

const ControlWarpper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 12px 24px;
  }
`;

const Button = styled.button`
  padding: 10px 35px;
  color: #fff;
  background-color: #e87722;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

function Chart() {
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width <= 767) {
      setOptions({
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      });
    }
    if (width >= 768) {
      setOptions({
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
        },
      });
    }
  }, [width]);

  const [options, setOptions] = useState({
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  });

  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: faker.lorem.word(),
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: faker.lorem.word(),
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const random = () => {
    const newData = {
      ...data,
      datasets: data.datasets.map((item) => {
        return {
          ...item,
          data: data.labels.map(() =>
            faker.datatype.number({ min: 0, max: 1000 })
          ),
        };
      }),
    };
    setData(newData);
  };

  const addDataset = () => {
    const newDataset = {
      label: faker.lorem.word(),
      data: data.labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: faker.commerce.color(),
      backgroundColor: faker.commerce.color(),
    };
    setData({ ...data, datasets: [...data.datasets, newDataset] });
  };

  const removeDataset = () => {
    let newArr = data.datasets.filter((value, index) => {
      return index != data.datasets.length - 1;
    });
    console.log(newArr);

    setData({ ...data, datasets: newArr });
  };

  const addData = () => {
    if (data.labels.length > 0) {
      const newLabels = months({ count: data.labels.length + 1 });
      const newDatasets = data.datasets.map((item, index) => {
        item.data = newLabels.map(() =>
          faker.datatype.number({ min: 0, max: 1000 })
        );
        return item;
      });
      setData({ labels: newLabels, datasets: newDatasets });
    }
  };

  const removeData = () => {
    if (data.labels.length <= 2) {
      return;
    }
    if (data.labels.length > 0) {
      const newArr = data.labels.filter((item, index) => {
        return index !== data.labels.length - 1;
      });
      setData({ ...data, labels: newArr });
    }
  };

  return (
    <ChartWrapper>
      <CanvasWrapper>
        <Line options={options} data={data} />
      </CanvasWrapper>

      <ControlWarpper>
        <Button onClick={random}>Random</Button>
        <Button onClick={addDataset}>Add dataset</Button>
        <Button onClick={removeDataset}>Remove</Button>
        <Button onClick={addData}>Add Data</Button>
        <Button onClick={removeData}>Remove Data</Button>
      </ControlWarpper>
    </ChartWrapper>
  );
}

export default Chart;
