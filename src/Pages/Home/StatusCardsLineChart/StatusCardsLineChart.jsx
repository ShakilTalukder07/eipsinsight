import { Line } from '@ant-design/charts';


const StatusCardsLineChart = () => {

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',

    seriesField: 'type',
    // isPercent: true,
    // isStack: true,

    label: {
      // position: 'middle',
      content: function content(item) {
        return ''.concat(item.y.toFixed(2), '%');
      },
      style: { fill: '#000' },
    },
    // colorField: 'type', // or seriesField in some cases
    // color: ['#19CDD7', '#DDB27C'],

    // point: {
    //   size: 5,
    //   shape: 'diamond | circule',
    // },

    tooltip: {
      formatter: (data) => {
        return {
          name: '',
          value: any,
        };
      },

      // customContent: (name, data) =>
      //   `<div>${data?.map((item) => {
      //     return `<div class="tooltip-chart" >
      //             <span class="tooltip-item-name">${item?.name}</span>
      //             <span class="tooltip-item-value">${item?.value}</span>
      //           </div>`;
      //   })}</div>`,
      //   showMarkers: true,
      //   showContent: true,
      position: 'right | left',
      //   showCrosshairs: true,
    },
  };

  return (
    <div className="text-white mr-1 my-1 w-36 h-16">
      <Line {...config} />
    </div>
  );
};

export default StatusCardsLineChart;