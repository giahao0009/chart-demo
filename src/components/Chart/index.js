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
import {
  getDates,
  addDayToCalendar,
  genRand,
  addNewDataset,
} from "../../utils/chart";
import { useWindowSize } from "../../hook";
import moment from "moment";

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

function Chart() {
  const [width, height] = useWindowSize();
  const [options, setOptions] = useState({
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: width <= 767 ? "bottom" : "top",
        align: "end",
      },
    },
  });

  const [labels, setLabels] = useState(getDates("07/01/2020", "08/10/2020", 5));

  const [data, setData] = useState({
    labels: labels.map((item) => {
      return item;
    }),
    datasets: [
      {
        label: "Quỹ A",
        data: labels.map(() => genRand(0.9, 1, 3)),
        borderColor: "#E87722",
        backgroundColor: "#E87722",
      },
      {
        label: "Quỹ B",
        data: labels.map(() => genRand(0.9, 1, 3)),
        borderColor: "#6ECEB2",
        backgroundColor: "#6ECEB2",
      },
      {
        label: "Quỹ C",
        data: labels.map(() => genRand(0.9, 1, 3)),
        borderColor: "#FED141",
        backgroundColor: "#FED141",
      },
    ],
  });

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
            align: "end",
          },
        },
      });
    }
  }, [width]);

  const random = () => {
    const newData = {
      ...data,
      datasets: data.datasets.map((item) => {
        return {
          ...item,
          data: data.labels.map(() => genRand(0.9, 1, 3)),
        };
      }),
    };
    setData(newData);
  };

  const addDataset = () => {
    const char = data.datasets[data.datasets.length - 1].label;
    const color = faker.commerce.color();
    const newDataset = {
      label: addNewDataset(char),
      data: data.labels.map(() => genRand(0.9, 1, 3)),
      borderColor: color,
      backgroundColor: color,
    };
    setData({ ...data, datasets: [...data.datasets, newDataset] });
  };

  const removeDataset = () => {
    let newArr = data.datasets.filter((value, index) => {
      return index != data.datasets.length - 1;
    });

    setData({ ...data, datasets: newArr });
  };

  const addData = () => {
    if (data.labels.length > 0) {
      const newDay = addDayToCalendar(labels[labels.length - 1]);
      console.log(newDay);
      const newLabels = [...data.labels, ...newDay];
      setLabels(newLabels);
      const newDatasets = data.datasets.map((item, index) => {
        item.data = newLabels.map(() => genRand(0.9, 1, 3));
        return item;
      });
      const newLabelsFormat = [...data.labels, ...newDay];
      setData({
        labels: newLabelsFormat.map((item) => {
          return item;
        }),
        datasets: newDatasets,
      });
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
        <Button onClick={removeDataset}>Remove dataset</Button>
        <Button onClick={addData}>Add Data</Button>
        <Button onClick={removeData}>Remove Data</Button>
      </ControlWarpper>
    </ChartWrapper>
  );
}

export default Chart;
