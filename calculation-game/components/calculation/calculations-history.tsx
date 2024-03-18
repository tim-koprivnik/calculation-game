'use client';

import { useSelector } from 'react-redux';
import { selectHistory } from '../../store/calculations/calculationsSlice';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const CalculationsHistory: React.FC = () => {
  const history = useSelector(selectHistory);

  return (
    <List
      className="overflow-auto absolute max-h-[200px] min-w-[300px]"
      style={{
        scrollbarWidth: 'thin', // For Firefox
        scrollbarColor: '#1976d2 transparent' // For Firefox, scrollbar thumb and track
      }}
    >
      {history.map((calculation) => (
        <ListItem key={calculation.id}>
          <ListItemText
            primary={`${calculation.expression} = ${
              calculation.userAnswer ?? '_'
            }`}
            secondary={
              calculation.userAnswer !== undefined // Check if an answer has been submitted
                ? calculation.isCorrect
                  ? 'Correct! 👏'
                  : 'Wrong! 😞'
                : '' // Do not display any secondary text if no answer has been submitted
            }
            secondaryTypographyProps={{
              style: {
                color: calculation.isCorrect ? 'green' : 'red'
              }
            }}
            className="flex justify-center items-center gap-2"
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CalculationsHistory;
