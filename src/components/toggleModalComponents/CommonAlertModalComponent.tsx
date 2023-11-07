import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useControlAlertStore from '../../store/useControlAlertStore';
import { IconButton } from '@mui/material';
import {commonSvgs} from '../../util/svgs/commonModalSvgs'

export default function CommonAlertModalComponent(
  
) {
  const {
    commonAlertControllerFlag,
    commonAlertMessage,
    commonAlertOpenFlag,
    commonAlertHeadTitle,
    commonAlertNoLabel,
    commonAlertYesLabel,
    commonAlertOneButton,
    commonAlertType,

    setCommonAlertHeadTitle,
    commonAlertClose,
    setCommonAlertMessage,
    commonAlertOpen,
    commonAlertCloseEvent,
    commonAlertYesFunctionEvent,
  } = useControlAlertStore();  
  
  React.useEffect(()=>{
    
  }, [commonAlertOpenFlag])

  const handleLeft = () => {
    if (commonAlertYesFunctionEvent!==null) {
      commonAlertYesFunctionEvent();
    } else {
      if (commonAlertType!=='continue' && commonAlertType!=='warningContinue') {
        commonAlertClose();
      }
    }
  };

  const handleRight = () => {
    if (commonAlertCloseEvent!==null) {
      commonAlertCloseEvent();
    } else {
      if (commonAlertType!=='continue' && commonAlertType!=='warningContinue') {
        commonAlertClose();
      }
    
    }
  };

  const handleClose = () => {
    if (commonAlertType!=='continue' && commonAlertType!=='warningContinue') {
      commonAlertClose();
    }
  }

  return (
    <div className='flex'>
      <Dialog className=''
      PaperProps={{sx:{
        borderRadius: '20px',
        zIndex: 2000000000
      }}}
      open={commonAlertOpenFlag} 
    // open={true}
      // onClose={handleClose}
      >
        <DialogContent 
          className={ (commonAlertType==='warning'||commonAlertType==='warningContinue')? 'flex flex-1 flex-col w-[390px] h-fit':'flex flex-1 flex-col w-[390px] h-[160px]'}
          sx={{
            paddingY:0,
            paddingX: 0
          }}
        >
        <div className='flex flex-1 flex-col h-full justify-center border-t border-t-[#dddddd]'>
            {(commonAlertType==='warning'||commonAlertType==='warningContinue') && <commonSvgs.ExclamationMarkIcon className='w-[100px] h-[100px] mt-[36px] ml-[145px]'/>}
            
            {commonAlertHeadTitle !== '' && <div className={`text-center font-[Roboto] text-[20px] font-[700] text-[#222222] ${(commonAlertType==='warning'||commonAlertType==='warningContinue')? 'mt-[20px]': 'mt-[39.4px]'}`}>{commonAlertHeadTitle}</div>}
            <div className={(commonAlertType==='warning'||commonAlertType==='warningContinue') ? (
                commonAlertHeadTitle !== '' ? 'mt-[10px] mb-[30px]':'mt-[23px] mb-[30px]'
            ): (
                commonAlertHeadTitle !== '' ? 'mt-[10px] mb-[28.6px]':'mt-[48px] mb-[36.1px]'
            )}>
                {commonAlertMessage.map((msg, msgIdx)=>{
                    const keyValue = 'msg-'+msgIdx;
                    return (
                    <div key={keyValue}
                        className='text-center font-[Roboto] text-[18px] px-[36px] font-[500] text-[#444444]'
                    >{msg}</div>
                    )
                })}
            </div>
        </div>
        </DialogContent>
        <DialogActions sx={{
          display:'flex',
          padding:0,
          margin:0,
        }}>
            {commonAlertOneButton ? (
                <div className='flex flex-1 flex-row justify-center w-full h-[50px] mb-[10px] mx-[10px] items-center'>
                  <div className='flex flex-1 h-full justify-center font-[Roboto] font-[700] text-[16px] bg-[#42278f] rounded-[15px] text-[#ffffff] hover:cursor-pointer items-center'
                    onClick={handleLeft}
                  >{commonAlertYesLabel}</div>
                </div>
              ):(
                <div className='flex flex-1 flex-row justify-center w-full h-[50px] mb-[10px] mx-[10px] gap-[10px] items-center'>
                  <div className='flex flex-1 h-full max-w-[180px] justify-center font-[Roboto] font-[700] text-[16px] bg-[#dcdadf] rounded-[15px] text-[#959aaa] hover:cursor-pointer items-center'
                  onClick={handleLeft}
                  >{commonAlertYesLabel}</div>
                  <div className='flex flex-1 h-full max-w-[180px] justify-center font-[Roboto] font-[700] text-[16px] bg-[#42278f] rounded-[15px] text-[#ffffff] hover:cursor-pointer items-center'
                    onClick={handleRight}
                  >{commonAlertNoLabel}</div>
                </div>
            )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
