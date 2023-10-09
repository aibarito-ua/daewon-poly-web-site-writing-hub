import React from "react";
import { useReactToPrint } from 'react-to-print';
import useLoginStore from "../../../../store/useLoginStore";
import ReportComponentToPrint from "./PrintReportComponent";
import useControlAlertStore from "../../../../store/useControlAlertStore";

const PrintReportExportButton = (props: {
    isActivityPage?:boolean;
})=> {
    const {
        isActivityPage
    } = props;
    const componentRef = React.useRef(null);
    const divRef = React.useRef<HTMLDivElement>(null);
    
    const [replaceBody, setReplaceBody] = React.useState<JSX.Element[][]>([]);
    const [isReplace, setIsReplace] = React.useState<boolean>(false);
    const [isMulti, setIsMulti] = React.useState<boolean>(false);

    const {userInfo} = useLoginStore();
    const {
        reportModalRubricData,
        reportSelectBookName,
        reportSelectFinder,
        reportSelectUnit,
        unitReportData,
        reportByUnitMainTitle,
    } = useControlAlertStore();
    React.useEffect(() => {
        console.log('isActi',isReplace)
        // if (!isReplace) {
            if (divRef.current) {
                const checkRef = divRef.current;
                checkRef.style.display='block';
                const oneRowHeight = checkRef.children[0].children[0].clientHeight; 
                const clientHeight = checkRef.clientHeight
                const offsetHeight = checkRef.offsetHeight;
                
                const scrollHeight = checkRef.scrollHeight;
                // console.log('clientHeight =',clientHeight)
                // console.log('offsetHeight =',offsetHeight)
                // console.log('scrollHeight =',scrollHeight)
                
                let newHeight = oneRowHeight;
                let newTags:JSX.Element[][]=[];
                const childRef = checkRef.children;
                for (let i = 0; i < childRef.length; i++) {
                    const childRow = childRef[i].children;
                    for (let j = 0; j< childRow.length; j++) {
                        const childSpanText = childRow[j].textContent;
                        // console.log('child span text =',childSpanText)
                        const spanHeight = childRow[j].clientHeight;
                        // console.log('span height =',spanHeight)
                        newHeight += spanHeight;
                        const newtagsLength = newTags.length;
                        // console.log('new tags leng =',newtagsLength)
                        const jsxChildSpan = <span key={childSpanText+'print-'+i+j} className='export-report-wr-oc-input'>{childSpanText}</span>;
                        if (newtagsLength === 0) {
                            // console.log('clientHeight =',clientHeight)
                            // console.log('newHeight =',newHeight)
                            // if (clientHeight > newHeight) {
                                newTags.push([])
                                newTags[0].push(jsxChildSpan);
                            // }
                        } else if (newtagsLength===1) {
                            const lastIdx = newtagsLength-1;

                            if (clientHeight > newHeight) {
                                newTags[lastIdx].push(jsxChildSpan);
                            } else if (clientHeight <= newHeight) {
                                newHeight = 0;
                                newTags.push([]);
                                newTags[lastIdx+1].push(jsxChildSpan);
                            }
                        } else {
                            const lastIdx = newtagsLength-1;
                            if (clientHeight > newHeight) {
                                newTags[lastIdx].push(jsxChildSpan);
                            } else if (clientHeight <= newHeight) {
                                newHeight=0;
                                newTags.push([]);
                                newTags[lastIdx+1].push(jsxChildSpan)
                            }
                        }
                    };// for j end
                }// for i end
                checkRef.style.display='none';
                if (newTags.length>1) {
                    setIsMulti(true);
                } else {
                    setIsMulti(false);
                }
                setIsReplace(true);
                console.log('new tags =',newTags)
                setReplaceBody(newTags);
            }
        // }
    }, [reportSelectUnit])

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    const ov_comments = unitReportData.teacher_comments.length> 0 ? (unitReportData.teacher_comments[0].draft_index===2? unitReportData.teacher_comments[0].comment : unitReportData.teacher_comments[1].comment):'';
    const ov_comments_split = ov_comments.split('\n');
    return (
        <div>
            {/* print area */}
            <div style={{display: 'none'}}>
                <div ref={componentRef} className="block w-full h-full">
                    {replaceBody.length> 0 && replaceBody.map((bodyItem, bodyIndex) => {
                        const key = 'print-ref-component-report-'+bodyItem[0].key+bodyIndex
                        const maxCount = replaceBody.length;
                        const currentCount = bodyIndex+1;
                        return <ReportComponentToPrint 
                        key={key}
                        currentOverall={bodyItem}
                        multi={{maxPageNum:maxCount, currentPageNum: currentCount}}
                        isMulti={isMulti}
                        userInfo={userInfo}
                        reportModalRubricData={reportModalRubricData}
                        reportSelectBookName={reportSelectBookName}
                        reportSelectFinder={reportSelectFinder}
                        reportSelectUnit={reportSelectUnit}
                        unitLabel={reportByUnitMainTitle}
                        unitReportData={unitReportData}
                        />

                    })}    
                </div>
            </div>
            {/* print button */}
            <button onClick={reportByUnitMainTitle!==''?handlePrint:()=>{}} className={isActivityPage ? 'bg-btn-report-modal-print-ic-svg bg-no-repeat w-[100px] h-[48px]': "bg-tab-print-btn-ic-svg bg-no-repeat w-[100px] h-[48px]"}></button>
            <div style={{display:'none'}} ref={divRef}>
                
                <div className='flex flex-col justify-start items-start w-[200.118mm] h-[20.558mm] border-[0.24mm] rounded-[4.88mm] px-[3.706mm] py-[3.628mm]'>
                    {ov_comments_split.map((ovItem, ovIdx) => {
                        return <span key={ovIdx} className='export-report-wr-oc-input'>{ovItem}</span>
                    })}
                </div> 
            </div>
        </div>
    )
}

export default PrintReportExportButton;