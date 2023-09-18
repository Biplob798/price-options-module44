import { LineChart, Line, XAxis, YAxis } from 'recharts';

const ReChart = () => {
    const studentData = [
        { id: 1, name: 'Student 1', Math: 90, Science: 85, History: 78, English: 92, Art: 88 },
        { id: 2, name: 'Student 2', Math: 88, Science: 91, History: 82, English: 95, Art: 89 },
        { id: 3, name: 'Student 3', Math: 76, Science: 80, History: 70, English: 85, Art: 78 },
        { id: 4, name: 'Student 4', Math: 94, Science: 89, History: 92, English: 96, Art: 91 },
        { id: 5, name: 'Student 5', Math: 85, Science: 88, History: 76, English: 87, Art: 82 },
        { id: 6, name: 'Student 6', Math: 91, Science: 93, History: 88, English: 97, Art: 90 },
        { id: 7, name: 'Student 7', Math: 79, Science: 84, History: 75, English: 81, Art: 77 },
        { id: 8, name: 'Student 8', Math: 87, Science: 90, History: 83, English: 94, Art: 88 },
        { id: 9, name: 'Student 9', Math: 83, Science: 86, History: 79, English: 88, Art: 81 },
        { id: 10, name: 'Student 10', Math: 92, Science: 94, History: 87, English: 98, Art: 93 },
      ];
      
      
    return (
        <div className='p-6'>
            <LineChart width={500} height={350} data={studentData}>
              <Line dataKey='Math' string={'red'}></Line>
              <XAxis dataKey='Math' string={'red'}></XAxis>
              <YAxis  dataKey='Math' string={'red'}></YAxis>
              <Line dataKey='Science' stroke='green'></Line>
              <XAxis dataKey='Science' string={'green'}></XAxis>
              <YAxis  dataKey='Science' string={'green'}></YAxis>
              
              <Line dataKey='History' stroke='blue'></Line>
              <Line dataKey='English' stroke='yellow'></Line>
              <Line dataKey='Art' stroke='purple'></Line>
              <XAxis dataKey='Math' string={'red'}></XAxis>
              <YAxis  dataKey='Math' string={'red'}></YAxis>
            </LineChart>
        </div>
    );
};

export default ReChart;