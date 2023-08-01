import { Radar } from "react-chartjs-2";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const RadarChartWorks = () => {
  const state = useSelector(state => state);
  const verify = JSON.stringify(state);
  const obj = JSON.parse(verify);

  const nacional = [40, 10, 23, 8, 17, 12];
  const internacional = [20, 15, 11, 10, 10, 14];

  const [language, setLanguage] = useState(obj.mylanguage.language);

  const arrayPt = ['BANCOS', 'E-COMMERCE', 'STARTUPS', 'OUTROS', 'FREELANCER', 'STREAMS'];
  const arrayEng = ['BANKS', 'E-COMMERCE', 'STARTUPS', 'OTHERS', 'FREELANCER', 'STREAMS'];

  const infoNacionalPt = '% DE ALUNOS NACIONAIS TRABALHAM EM'
  const infoInternacionalPt = '% DE ALUNOS INTERNACIONAIS TRABALHAM EM'

  const infoNacionalEng = '% OF NATIONAL STUDENTS WORK IN'
  const infoInternacionalEng = '% OF INTERNATIONAL STUDENTS WORK IN'

  const array = language ? arrayEng : arrayPt;

  const infoNacional = language ?  infoNacionalEng : infoNacionalPt;
  const infoInternacional = language ? infoInternacionalEng : infoInternacionalPt;


  useEffect(() => {
    setLanguage(obj.mylanguage.language);
  }, [obj.mylanguage.language]);

  let data = {
    labels: array,
    datasets: [
      {
        label: infoNacional,
        data: nacional,
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(14, 102, 135, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 0.2)', 'rgba(14, 102, 135, 0.2)'],
      },
      {
        label: infoInternacional,
        data: internacional,
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(44, 82, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 0.2)', 'rgba(44, 82, 235, 0.2)'],
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        font: {
          weight: 'bold',
        },
      },
    },
  };

  return (
    <Radar data={data} options={options} />
  );
};

export default RadarChartWorks;
