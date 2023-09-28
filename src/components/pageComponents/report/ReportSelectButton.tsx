import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { progressIcons } from '../../../util/svgs/commonProgressIcons';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



export default function ReportSelectButton(props:{
  data:{
    year: number, semester:number, level:string, label:string
  }[],
  selectDataFn:Function,
  isLevel:boolean,
  useDefaultEmptyValueFlag?:boolean,
  disabledFlag?:boolean,
}) {
  const {
    data,
    useDefaultEmptyValueFlag,
    disabledFlag,
    isLevel, 
    selectDataFn,
  } = props;
  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState<boolean>(false);
  
  const handleChange = (event: SelectChangeEvent) => {
    console.log('user info =',data)
    const targetData = event.target.value;
    console.log('target =',targetData);
    if (targetData === '') {
      selectDataFn(data[0], isLevel, true)
      
      setValue('');
      return;
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].label === targetData) {
          selectDataFn(data[i], isLevel);
          
          setValue(event.target.value);
          break;
        }
      }
    }
  };


  return (
    <div className='flex items-center h-[45px] ' >
      <FormControl sx={{ width: '240px', height: '45px', minHeight:'45px', m: 1}} >
        <Select
            sx={{
              color: value===''? '#aeaeae': '#222',
              height: '45px',
              backgroundColor: '#fff',
              borderRadius: '15px',
              '& .MuiInputBase-input': {
                padding:0
              },
              '& .MuiSelect-icon': {
                right: '14px'
              }
            }}
            
            placeholder='test'
            value={value}
            disabled={disabledFlag?true:false}
            onChange={handleChange}
            displayEmpty={true}
            open={open}
            renderValue={(selected) => {
              console.log('selected !!=',selected)
              if (selected.length === 0) {
                if (isLevel) {
                  return 'Please select a level'
                } else {
                  return 'Please select a semester';
                }
                

              }else return selected

            }}
            
            onOpen={()=>setOpen(true)}
            onClose={()=>setOpen(false)}
            
            IconComponent={open? progressIcons.LevelSelectToggleUpArrowIcon: progressIcons.LevelSelectToggleDownArrowIcon}
            
        >
            {!isLevel && <MenuItem sx={{height: '45px', minHeight: '45px'}} value=''></MenuItem>}
            {isLevel && <MenuItem disabled sx={{height: '45px', minHeight: '45px'}} value=''></MenuItem>}

            {data.map((dataItem, dataIndex)=>{
                return <MenuItem key={dataIndex} sx={{height: '45px', minHeight: '45px'}} value={dataItem.label}>{dataItem.label}</MenuItem>

            })}
        </Select>
      </FormControl>
    </div>
  );
}