import React from 'react';
import { CommonFunctions } from '../../../util/common/commonFunctions';

const contentComponent = ( outlineItem: TSparkWritingData, draftStatus: string ) => {
    const manufactureItem:TSparkWritingDataOutline[] = draftStatus==='1'
        ? JSON.parse(JSON.stringify(outlineItem.draft_1_outline))
        :JSON.parse(JSON.stringify(outlineItem.draft_2_outline));
    const titleItem = manufactureItem.splice(0, 1);
    const bodyItemDump = manufactureItem.splice(0);
    const bodyItemNames = CommonFunctions.outlineNameLists(bodyItemDump)
    const bodyItem:TSparkWritingDataOutline[][] = CommonFunctions.outlineDataFormRemake(bodyItemNames, bodyItemDump);
    // console.log('bodyItemNames =',bodyItem)
    
    // Title
    const contentTitleComponent = (titleText:string, keyVal:any) => {
        return (<div className='flex flex-1 w-full h-fit justify-center z-0' key={keyVal}>
            <div className='flex flex-row w-full h-fit max-h-full text-start'>
                <div className='flow-root w-full overflow-y-auto'>
                    <span>
                        <pre className='preview-text-pre'>{titleText}</pre>
                    </span>
                </div>
            </div>
        </div>)
    }
    // Body
    const contentBodyComponent = (itemIndex:number, text:string, paddingStr:string) => {
        return (<span className={`flex ${paddingStr}`} key={itemIndex}>
            <span className='preview-body-text-pre'>{text}</span>
        </span>)
    }
    // draft 2 body
    const contentBodyComponent2 = (itemIndex:number, text:string, paddingStr:string) => {
        const textArr = text.split('\n');
        return textArr.map((textItem, textItemIndex)=>(
            <span className={`flex pb-[20px] w-[1160px] max-w-[1160px] overflow-hidden ${paddingStr}`} key={itemIndex+'-draft-2-'+textItemIndex}>
                <span className='preview-body-text-pre w-[1160px] max-w-[1160px]'>{textItem}</span>
            </span>
        ));
    }
    return (
        <div className='flex flex-1 flex-col w-full h-full pt-[24px] px-[12px] z-0 overflow-y-auto'>
            
            {titleItem[0].name.toLocaleLowerCase()==='title' && contentTitleComponent(titleItem[0].input_content, titleItem[0].name+titleItem[0].order_index)}
            <div className='flex flex-col text-start w-full h-full max-h-full pt-[26px] overflow-y-auto z-0'>
                {draftStatus==='1' && bodyItem.map((item, itemIndex) => {
                    return (
                        <div key={itemIndex} className='pb-[20px]'>
                            {item.map((innerItem, innerItemIndex)=>{
                                return contentBodyComponent(innerItemIndex, innerItem.input_content, '')
                            })}
                        </div>
                    )
                })}
                {draftStatus==='2' && bodyItem.map((item, itemIndex) => (
                    <div key={itemIndex} className='pb-[20px]'>
                        {item.map((innerItem, innerItemIndex)=> contentBodyComponent2(innerItemIndex, innerItem.input_content, '') )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default contentComponent;