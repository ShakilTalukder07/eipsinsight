import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";



const TypeDraft = () => {

    const [data, setData] = useState()

    useEffect(()=>{
        fetch('eipStatus.json')
        .then( res => res.json())
        .then( data => setData(data[2].status))
    },[])


    console.log(data);

    const datas = [
        {
            "id": "c",
            "label": "c",
            "value": 469,
            "color": "hsl(274, 70%, 50%)"
        },
        {
            "id": "ruby",
            "label": "c",
            "value": 469,
            // "color": "hsl(274, 70%, 50%)"
        },
        {
            "id": "erlang",
            "label": "erlang",
            "value": 82,
            "color": "hsl(294, 70%, 50%)"
        },
        {
            "id": "haskell",
            "label": "haskell",
            "value": 490,
            "color": "hsl(73, 70%, 50%)"
        },
        {
            "id": "make",
            "label": "make",
            "value": 407,
            "color": "hsl(24, 70%, 50%)"
        },
        {
            "id": "css",
            "label": "css",
            "value": 119,
            "color": "hsl(288, 70%, 50%)"
        }
    ]


    return (
        <div>
            <div className="w-1/2 shadow-3xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ...">
                <div className='flex flex-col w-[500px] h-[400px] rounded-lg text-black bg-white'>
                    <h1 className='text-start text-xl font-bold mt-3 ml-3'>Draft<span className='ml-2'>127</span></h1>
                    <div className='w-[520px] h-[420px] my-[-50px] flex justify-center items-center'>
                        <ResponsivePie
                            data={datas}
                            margin={{ top: 70, right: 80, bottom: 80, left: 80 }}
                            innerRadius={0.5}
                            padAngle={0.7}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        0.2
                                    ]
                                ]
                            }}
                            arcLinkLabelsSkipAngle={10}
                            arcLinkLabelsTextColor="#333333"
                            arcLinkLabelsThickness={2}
                            arcLinkLabelsColor={{ from: 'color' }}
                            arcLabelsSkipAngle={10}
                            arcLabelsTextColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        2
                                    ]
                                ]
                            }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'ruby'
                                    },
                                    id: 'dots',
                                    backgroundColor: 'rgba(255, 115, 115)',
                                },
                                {
                                    match: {
                                        id: 'c'
                                    },
                                    id: 'dots',
                                    backgroundColor: 'rgba(255, 115, 115)'
                                },
                                {
                                    match: {
                                        id: 'go'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'python'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'scala'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'lisp'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'elixir'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'javascript'
                                    },
                                    id: 'lines'
                                }
                            ]}
                            legends={[
                                {
                                    anchor: 'bottom',
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: 56,
                                    itemsSpacing: 0,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 1,
                                    symbolSize: 18,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        ></ResponsivePie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypeDraft;