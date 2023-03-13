
import { Radar } from "react-chartjs-2";

export const RadarChartWorks = () => {

  let nacional = [40, 10, 23, 8, 17, 12];
  let internacional = [20, 15, 11, 10, 10, 14];


  let data = {
      labels: [
          'BANCOS',
          'E-COMMERCE',
          'STARTUPS',
          'EXTERIOR',
          'FREELANCER',
          'STREAMS'
      ],
      datasets: [
          {
              label: '% DE ALUNOS NACIONAIS TENDEM A TRABALHAR EM',
              data: nacional,
              backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(14, 102, 135, 0.2)'

              ],
              borderColor: ['rgba(54, 162, 235, 0.2)', 'rgba(14, 102, 135, 0.2)'


              ]
          },
          {
            label: '% DE ALUNOS INTERNACIONAIS TENDEM A TRABALHAR EM',
            data: internacional,
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(44, 82, 235, 0.2)'

            ],
            borderColor: ['rgba(54, 162, 235, 0.2)', 'rgba(44, 82, 235, 0.2)'


            ]
        }
      ]
  }

  const options = {
      // title:{
      //     display: true,
      //     text: 'Pintura dos Apartamentos. Meta 2000 R$'
      //  },
      // scales:{
      //     yAxes: [
      //         {
      //             ticks:{
      //                 min: 0,
      //                 max: 300,
      //                 stepSize: 20
      //             }
      //         }
      //     ]
      //  }
  }

  return (
      
          <Radar data={data}
              options={options}

          />
      
  )
}




export default RadarChartWorks;


