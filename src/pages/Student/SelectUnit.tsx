import React from 'react';
import useNavStore from '../../store/useNavStore';
import useEssayWritingCenterDTStore from '../../store/useEssayWritingCenterDTStore'
import useSparkWritingStore from '../../store/useSparkWritingStore';
import {CommonFunctions} from '../../util/common/commonFunctions'
import { useNavigate } from 'react-router-dom';
import useLoginStore from '../../store/useLoginStore';
import SmallHead from '../../components/commonComponents/SmallHeadComponent/SmallHead';
import { commonIconSvgs } from '../../util/svgs/commonIconsSvg';
import { callUnitInfobyStudent, getReportsAPI } from './api/EssayWriting.api';
import useControlAlertStore from '../../store/useControlAlertStore';
import { useComponentWillMount } from '../../hooks/useEffectOnce';
import UnitReportModalComponent from '../../components/toggleModalComponents/UnitReportModalComponent';
import { logoutAPI } from './api/Login.api';
import { getDraftPath } from './ocrDraft/controller/Navigate';


export default function SelectUnit () {
    const navigate = useNavigate();
    const {role, userInfo, device_id, isMobile, setMaintenanceData} = useLoginStore();
    const {
        setTopNavHiddenFlagged, setSubNavTitleString, setSubRightNavTitleString, setSelectUnitInfo,
        goBackFromDraftInUnitPage, setGoBackFromDraftInUnitPage,
    } = useNavStore()
    const { proceedingTopicIndex, setCompleteTopicIndex} = useEssayWritingCenterDTStore();
    const {
        sparkWritingData, sparkWritingBookName,setSparkWritingDataFromAPI,
        // hover event
        lastUnitIndex, setLastUnitIndex,
        // time track
        setSparkWritingUnitStart
    } = useSparkWritingStore();
    
    const {
        setCommonStandbyScreen,
        // report modal
        setReportAPIData,
        setSelectReportData,
        setReportSelectedFinder,
        setReportSelectUnit,
        
        setUnitReportModal,
        // test
        unitRubricScoresData, reportSelectedOverallBarChart, reportSelectedOverallPieChart,
        commonAlertClose, commonAlertOpen,
        // feedback initialize
        setTeacherFeedbackInit
    } = useControlAlertStore();

    const logoutFn =async () => {
        logoutAPI(userInfo.userCode, device_id)
        if(isMobile)
            window.ReactNativeWebView.postMessage(JSON.stringify('logout'))
        else if(window.navigator.userAgent.toLowerCase().indexOf('electron') > -1) {
            (window as any).api.toElectron.send('clear')
        }
        window.location.reload()
    }

    React.useEffect(()=>{
        if (lastUnitIndex===0) {
            setLastUnitIndex(1);
        }
        setSubNavTitleString('Spark Writing')
        setSubRightNavTitleString('');
        setCompleteTopicIndex(proceedingTopicIndex,1)
        return () => {
            setSubNavTitleString('');
        }
    },[
        setTopNavHiddenFlagged,
        setSubNavTitleString,
        setSubRightNavTitleString,
        proceedingTopicIndex,
        setCompleteTopicIndex,
        sparkWritingData,
        lastUnitIndex,
        setLastUnitIndex,
    ])
    const beforeRenderedFn = async () => {
        setCommonStandbyScreen({openFlag:true})
        const allUnitsDataFromAPI = await callUnitInfobyStudent(userInfo.userCode, userInfo.courseName, userInfo.accessToken).then((response) => {
            if (response.data) {
                let maintenanceInfo:TMaintenanceInfo = response.data;
                maintenanceInfo.start_date = response.data.start_date;
                maintenanceInfo.end_date = response.data.end_date;
                let dumyMaintenanceData:TMaintenanceData = {
                    alertTitle: '시스템 점검 안내',
                    data: maintenanceInfo,
                    open: false,
                    type: ''
                }
                setCommonStandbyScreen({openFlag:false})
                setMaintenanceData(dumyMaintenanceData)
                navigate('/')
            } else {
                response.units = response.units.map((item)=>{
                    item.draft_1_outline = item.draft_1_outline.sort((a,b) => {
                        return a.order_index - b.order_index;
                    }).map((item) => {
                        if (typeof(item.is_input_open) !== 'boolean') {
                            item.is_input_open = false;
                        }
                        return item;
                    });
                    if (item.draft_1_status.status===4) {
                        item.draft_2_outline = item.draft_2_outline.sort((a,b) => {
                            return a.order_index - b.order_index;
                        }).map((item) => {
                            if (typeof(item.is_input_open) !== 'boolean') {
                                item.is_input_open = false;
                            }
                            return item;
                        });
                    }
                    return item;
                })
                
                return response;
            }
        });
        // always currently page init feedback flags

        setTeacherFeedbackInit();

        // report
        const student_code = userInfo.userCode;
        
        const getReportAll = await getReportsAPI(student_code, userInfo.accessToken,userInfo.courseName).then((res) => {
            if (res.is_server_error) {
                if (res.data) {
                    let maintenanceInfo:TMaintenanceInfo = res.data;
                    maintenanceInfo.start_date = res.data.start_date;
                    maintenanceInfo.end_date = res.data.end_date;
                    let dumyMaintenanceData:TMaintenanceData = {
                        alertTitle: '시스템 점검 안내',
                        data: maintenanceInfo,
                        open: false,
                        type: ''
                    }
                    console.log('login maintenanceInfo =',dumyMaintenanceData)
                    setCommonStandbyScreen({openFlag:false})
                    setMaintenanceData(dumyMaintenanceData)
                    navigate('/')
                } else {
                    setCommonStandbyScreen({openFlag:false})
                    if (res.isDuplicateLogin) {
                        commonAlertOpen({
                            messages: ['중복 로그인으로 자동 로그아웃 처리 되었습니다.'],
                            priorityLevel: 2,
                            messageFontFamily:'NotoSansCJKKR',
                            useOneButton: true,
                            yesButtonLabel:'OK',
                            yesEvent: async() => {
                                await logoutFn()
                            }
                        })
                    } else {
                        commonAlertOpen({
                            messages: [
                                'Cannot connect to the server.',
                                'Please try again later.'
                            ],
                            priorityLevel: 2,
                            useOneButton: true,
                            yesButtonLabel:'OK',
                            yesEvent: () => {
                                commonAlertClose();
                            }
                        })
                    }
                }
                return false;
            } else {
                return res.result;
            }
            
        });

        if (goBackFromDraftInUnitPage) {
            // const exitFunc = () => {
            //     CommonFunctions.goLink('WritingClinic/SparkWriting',navigate, role)
            // };
            // setGoBackFromDraftInUnitPage(()=>exitFunc());
            setGoBackFromDraftInUnitPage(()=>{
                commonAlertOpen({
                    messages: ['Do you want to exit?'],
                    messageFontFamily: 'Roboto',
                    alertType: 'warningContinue',
                    yesButtonLabel:'Yes',
                    noButtonLabel: 'No',
                    yesEvent: async () => {
                        commonAlertClose();
                        CommonFunctions.goLink('WritingClinic/SparkWriting',navigate, role)
                    },
                    
                })
            })
        }
        if (getReportAll && allUnitsDataFromAPI) {
            console.log('getReportAll ==',getReportAll)
            let dumyFinderData = {label:'init', level:userInfo.courseName, semester:userInfo.semester, year:userInfo.year};
            dumyFinderData.level = userInfo.courseName;
            setReportSelectedFinder(dumyFinderData);
            setReportAPIData(getReportAll);
            setSparkWritingDataFromAPI(allUnitsDataFromAPI.units, allUnitsDataFromAPI.book_name)
            console.log('userInfo ==',userInfo)
            setSelectReportData(getReportAll,userInfo.year,userInfo.semester,userInfo.courseName);
            test(getReportAll,userInfo.year,userInfo.semester,userInfo.courseName);
            // setReportSelectUnit(1)
        }
        // draft 화면 진입 시 마지막 저장된 데이터로 화면이 갱신되지 않는 오류 수정
        if (!getReportAll && allUnitsDataFromAPI) {
            setSparkWritingDataFromAPI(allUnitsDataFromAPI.units, allUnitsDataFromAPI.book_name);
        }
    }
    useComponentWillMount(async ()=>{
        await beforeRenderedFn().then(()=>{
            
            setCommonStandbyScreen({openFlag:false})
        });
    })
    
    const test = (data:TReportByStudentResponse,
        year:number,
        semester:number,
        level:string ) => {
        let dumyData:TReportByStudentPeriodLevel= {
            book_name:'', level_name:'', rubric_info:[], overall_report:[], unit_reports: [], class_name:''
        }

        let rubricScoreDataStates:TUnitScoreData = JSON.parse(JSON.stringify(unitRubricScoresData));
        let dumyOverallBar:TOverallBarChartDataItem[] = JSON.parse(JSON.stringify(reportSelectedOverallBarChart));
        let dumyOverallPie:TAllDoughnutDatas = JSON.parse(JSON.stringify(reportSelectedOverallPieChart));

        for (let i = 0; i < data.periods.length; i++) {
            const currentPeriod = data.periods[i];
            console.log('currentPeriod ==',currentPeriod)
            // find year & semester
            if (currentPeriod.year === year && currentPeriod.semester === semester) {
                for (let j = 0; j < currentPeriod.levels.length; j++) {
                    // find level
                    const currentData = currentPeriod.levels[j];
                    if (currentData.level_name === level) {
                        dumyData = currentData;
                        break;
                    }
                }
            }
        };
        // const categoryNames = ['ideas', 'organization', 'voice','word choice','sentence fluency', 'conventions'];
        let sumData = [
            {name:'conventions', sum: 0},
            {name:'sentence fluency', sum: 0},
            {name:'word choice', sum: 0},
            {name:'voice', sum: 0},
            {name:'organization', sum: 0},
            {name:'ideas', sum: 0},
        ]
        for (let z = 0; z < dumyData.overall_report.length; z++) {
            const targetOverall = dumyData.overall_report[z];
            const targetUnitIdx = targetOverall.unit_index;
            const targetCate = targetOverall.categories;

            for (let k = 0; k < targetCate.length; k++) {
                const targetCateName = targetCate[k].category;
                const targetScore = targetCate[k].score;
                for (let j = 0; j < rubricScoreDataStates.hexagonChartData.length; j++) {
                    if (rubricScoreDataStates.hexagonChartData[j].target === targetCateName) {
                        rubricScoreDataStates.hexagonChartData[j].data[0].tooltip.content = targetCate[k].description
                    }
                }
                for (let s = 0; s < sumData.length; s++) {
                    if (sumData[s].name === targetCateName) {
                        sumData[s].sum += targetScore;
                        break;
                    }
                }
                // set bar data
                for (let b = 0; b < dumyOverallBar.length; b++) {
                    const currentBarName = dumyOverallBar[b].target;
                    if (currentBarName === targetCateName) {
                        
                        if (targetUnitIdx === 1) {
                            dumyOverallBar[b].unit1 = targetScore;
                            break;
                        } else if (targetUnitIdx === 2) {
                            dumyOverallBar[b].unit2 = targetScore;
                            break;
                        } else if (targetUnitIdx === 3) {
                            dumyOverallBar[b].unit3 = targetScore;
                            break;
                        } else if (targetUnitIdx === 4) {
                            dumyOverallBar[b].unit4 = targetScore;
                            break;
                        } else if (targetUnitIdx === 5) {
                            dumyOverallBar[b].unit5 = targetScore;
                            break;
                        }
                    }
                } // end category bar data

            }
        }
        console.log('dumyOverallBar===',dumyOverallBar)
        console.log('sumData ==',sumData)
        
        console.log('dumyData =',dumyData)
        const completeUnitCount = dumyData.overall_report.length;
        console.log('unit count ==',completeUnitCount)
        // set pie data
        for (let p = 0; p < dumyOverallPie.length; p++) {
            const currentPie = dumyOverallPie[p];
            for (let s = 0; s < sumData.length; s++) {
                if (sumData[s].name === currentPie.target) {
                    const maxScore = completeUnitCount*10;
                    const percent = sumData[s].sum / maxScore * 100;
                    console.log('percent ==',percent)
                    dumyOverallPie[p].data[0].value = percent;
                }
            }
        }
        console.log('dumyOverallPie ==',dumyOverallPie)
    }

    const SelectBoxUnitMapLoop = (props: {items:TSparkWritingDatas}) => {

        const selectWritingTopic = async (unitNum:string, unitTitle:string, draftNum: string, pageType?: TDraft1stOulinePageType) => {
            console.log('unitNum: ',unitTitle)
            setLastUnitIndex(parseInt(unitNum))
            setSelectUnitInfo(`Unit ${unitNum}.`,unitTitle)
            setSparkWritingUnitStart(unitNum, draftNum);
            const path = getDraftPath(unitNum, draftNum, pageType);
            CommonFunctions.goLink(path, navigate, role);
        }
        const selectTemporaryPreview = async (unitNum:string, unitTitle:string, draftNum: string ) => {
            setLastUnitIndex(parseInt(unitNum))
            setSelectUnitInfo(`Unit ${unitNum}.`,unitTitle)
            setSparkWritingUnitStart(unitNum, draftNum);
            const path = `WritingClinic/SparkWriting/${unitNum}/${draftNum}/Preview`
            CommonFunctions.goLink(path, navigate, role)
        }
        const selectPreview = async (unitNum:string, unitTitle:string, draftNum: string ) => {
            setLastUnitIndex(parseInt(unitNum))
            setSelectUnitInfo(`Unit ${unitNum}.`,unitTitle)
            setSparkWritingUnitStart(unitNum, draftNum);
            const path = `WritingClinic/SparkWriting/${unitNum}/${draftNum}/Preview/submit`
            CommonFunctions.goLink(path, navigate, role)
        }
        const draftIcons = (firstProgress:number, secondProgress:number, currentStep:number) => {
            const currentlyInProgress = currentStep===1 ? (
                secondProgress===0 ? (
                    firstProgress!==4 ? true : false
                ):false
            ):(
                firstProgress===4 ? (
                    secondProgress===4 ? false:true
                ): false
            )
            const progress = currentStep===1? firstProgress: (
                firstProgress===4 ? secondProgress : -1
            )

            if (progress === 0) {
                // return  <CircleIcon className={currentlyInProgress ? 'draft-icon-in-progress' : 'draft-icon-not-progress'} />
                return <div className={
                    currentlyInProgress 
                    ? 'draft-icon-in-progress bg-unit-box-status-ic-entry bg-no-repeat bg-cover' 
                    : 'draft-icon-not-progress bg-unit-box-status-ic-entry bg-no-repeat bg-cover'
                } />
            } else if (progress === 1) {
                // return <SavedCircleIcon className={currentlyInProgress ? 'draft-icon-in-progress' : 'draft-icon-not-progress'} />
                return <div className={
                    currentlyInProgress 
                    ? 'draft-icon-in-progress bg-unit-box-status-ic-save bg-no-repeat bg-cover' 
                    : 'draft-icon-not-progress bg-unit-box-status-ic-save bg-no-repeat bg-cover'
                } />
            } else if (progress >1 && progress < 5) {
                //  2, 3, 4
                // return <CompleteCircleIcon className={currentlyInProgress ? 'draft-icon-in-progress' : 'draft-icon-not-progress'} />
                return <div className={
                    currentlyInProgress 
                    ? 'draft-icon-in-progress bg-unit-box-status-ic-complete bg-no-repeat bg-cover' 
                    : 'draft-icon-not-progress bg-unit-box-status-ic-complete bg-no-repeat bg-cover'
                } />
            } else if (progress === 5) {
                // return <ReLearningCircleIcon className={currentlyInProgress ? 'draft-icon-in-progress' : 'draft-icon-not-progress'} />
                return <div className={
                    currentlyInProgress 
                    ? 'draft-icon-in-progress bg-unit-box-status-ic-reject bg-no-repeat bg-cover' 
                    : 'draft-icon-not-progress bg-unit-box-status-ic-reject bg-no-repeat bg-cover'
                } />
            } else {
                // -1
                // return <NoEntryCircleIcon className={currentlyInProgress ? 'draft-icon-in-progress' : 'draft-icon-not-progress'} />
                return <div className={
                    currentlyInProgress 
                    ? 'draft-icon-in-progress bg-unit-box-status-ic-no_entry bg-no-repeat bg-cover' 
                    : 'draft-icon-not-progress bg-unit-box-status-ic-no_entry bg-no-repeat bg-cover'
                } />
            }
        }
        
        return (
            <div className={window.navigator.userAgent.toLowerCase().indexOf('electron') > -1 
             ?"flex flex-col bg-[#fff] w-full h-[445px] px-[25px] pb-[35px] pt-[23px] rounded-[24px]"
             :"flex flex-col bg-[#fff] h-[445px] max-w-[1010px] px-[25px] pb-[35px] pt-[23px] rounded-[24px]"
            }
            >
                <div className='select-a-unit-to-begin select-none'>{'* Select a unit to begin.'}</div>
                <div className={ window.navigator.userAgent.toLowerCase().indexOf('electron') > -1 
                ? 'select-unit-div-electron': 'select-unit-div'}>
                {props.items.map((item:TSparkWritingData, topicsIndex:number)=>{
                                
                    // 각 회차별 
                    // 0: 진입 가능&진입불가, 
                    // 1: 임시 저장, 
                    // 2: 완료(admin draft 입수/진행중)
                    // 3: 완료(admin draft 진행중/임시저장)
                    // 4: 완료(admin feedback 완료)
                    // 5: 재학습 필요
                    // 1: 1st 시작, 2nd는 1st의 피드백이 있을때
                    const selectUnitIndex = item.unit_index.toString();
                    const selectUnitMainTitle = `Unit ${item.unit_index}`
                    const selectUnitSubTitle = item.topic;
                    
                    const firstDraft = item.draft_1_status.status
                    const secondDraft = item.draft_2_status.status
                    const firstFeedback = firstDraft===4 ? true : false;
                    const secondFeedback = secondDraft===4 ? true : false;
                    
                    // grammar save check -> prev or write
                    const isGrammarSave1st = item.draft_1_outline[1].grammar_correction_content_student !== '';
                    
                    return (
                        
                    <div key={topicsIndex} 
                    className={lastUnitIndex === item.unit_index ? 'select-none select-writing-topic-item-button-last':`select-none select-writing-topic-item-button`}
                    onClick={async ()=>{
                        // init back event
                        setGoBackFromDraftInUnitPage(()=>{
                            commonAlertOpen({
                                messages: ['Do you want to exit?'],
                                messageFontFamily: 'Roboto',
                                alertType: 'warningContinue',
                                yesButtonLabel:'Yes',
                                noButtonLabel: 'No',
                                yesEvent: async () => {
                                    commonAlertClose();
                                    CommonFunctions.goLink('WritingClinic/SparkWriting',navigate, role)
                                },
                                
                            })
                        })
                        if ( !firstFeedback && !secondFeedback ) {
                            // 1차 진입 가능
                            if (firstDraft === 0) {
                                // 1차 진행 -> 편집 가능
                                await selectWritingTopic(selectUnitIndex, selectUnitSubTitle, '1', item.draft_1_page_outline_type);
                            } else if (firstDraft === 1) {
                                // 1차 임시저장 -> 편집 가능
                                if (isGrammarSave1st) {
                                    await selectTemporaryPreview(selectUnitIndex, selectUnitSubTitle, '1');
                                } else {
                                    await selectWritingTopic(selectUnitIndex, selectUnitSubTitle, '1', item.draft_1_page_outline_type);
                                }
                            } else if (firstDraft === 2|| firstDraft === 3) {
                                // 1차 완료(submit) -> 편집 x, 뷰잉만
                                await selectPreview(selectUnitIndex, selectUnitSubTitle, '1')
                            } else if (firstDraft === 5) {
                                // 1차 재학습 -> 편집 가능
                                await selectWritingTopic(selectUnitIndex, selectUnitSubTitle, '1', item.draft_1_page_outline_type);
                            } else if (firstDraft === 4) {
                                // 2차 진입 가능
                            }
    
                        } else if (firstFeedback && !secondFeedback) {
                            // 2차 진입 가능
                            if (secondDraft === 0) {
                                // 2차 진행 -> 편집 가능
                                await selectWritingTopic(selectUnitIndex, selectUnitSubTitle, '2', item.draft_1_page_outline_type);
                            } else if (secondDraft === 1) {
                                // 2차 임시저장 -> 편집 가능
                                await selectWritingTopic(selectUnitIndex, selectUnitSubTitle, '2', item.draft_1_page_outline_type);
                            } else if (secondDraft === 2 || secondDraft === 3) {
                                // 2차 완료(submit) -> 편집 x, 뷰잉만
                                await selectPreview(selectUnitIndex, selectUnitSubTitle, '2')
                            } else if (secondDraft === 5) {
                                // 2차 재학습 -> 편집 가능
                                await selectWritingTopic(selectUnitIndex, selectUnitSubTitle, '2', item.draft_1_page_outline_type);
                            } else if (secondDraft === 4) {
                                // -> final
                            }
                        } else if (firstFeedback && secondFeedback) {
                            // 100% -> final feedback
                            // open modal
                            setLastUnitIndex(item.unit_index)
                            setReportSelectUnit(item.unit_index)
                            setUnitReportModal({open:true})
                        }
                    }}
                    >
                        <div className='unit-select-button-item'>
                            <div className='unit-select-button-item-head'>
                                <div className={lastUnitIndex===item.unit_index ? 'unit-select-button-item-unit-last': 'unit-select-button-item-unit'}>
                                    {selectUnitMainTitle}
                                </div>
                                <div className={lastUnitIndex===item.unit_index ? 'unit-select-button-item-title-last ': 'unit-select-button-item-title'}>{selectUnitSubTitle}</div>
                            </div>
                            {(firstDraft !== 4 || secondDraft !== 4) && (
                                <div className='unit-select-button-item-drafts z-0 mt-[31.7px]'>
                                    <div className='flex unit-select-button-item-dotted z-0'></div>
                                    <div className='flex flex-row z-10 relative items-center'><span>{
                                        draftIcons(firstDraft, secondDraft, 1)
                                    }</span>
                                        <div className='ordinal pl-[6px]'>{'1st'}</div>
                                        <div className='whitespace-pre'>{' Draft'}</div>
                                    </div>
                                    <div className='flex flex-row z-10 relative mt-[22px] items-center'><span>{
                                        draftIcons(firstDraft, secondDraft, 2)
                                    }</span>
                                        <span className='ordinal pl-[6px]'>{'2nd'}</span>
                                        <div className='whitespace-pre'>{' Draft'}</div>
                                    </div>
                                </div>
                            )}
                            {(firstDraft === 4 && secondDraft === 4) && (
                                <div className='unit-select-button-item-drafts z-0 mt-[31.7px] relative'>
                                    <div className='flex unit-select-button-item-dotted z-0'></div>
                                    <div className='flex flex-row z-10 relative items-center'><span>{
                                        draftIcons(firstDraft, secondDraft, 1)
                                    }</span>
                                        <div className='ordinal pl-[6px]'>{'1st'}</div>
                                        <div className='whitespace-pre'>{' Draft'}</div>
                                    </div>
                                    <div className='flex flex-row z-10 relative mt-[22px] items-center'><span>{
                                        draftIcons(firstDraft, secondDraft, 2)
                                    }</span>
                                        <span className='ordinal pl-[6px]'>{'2nd'}</span>
                                        <div className='whitespace-pre'>{' Draft'}</div>
                                    </div>
                                    <div className='absolute w-[150px] h-[140px] top-0 left-0 rounded-[22px] bg-[#000] opacity-[0.7] z-20'>
                                    </div>
                                    <div className='unit-complete-report-icon'></div>
                                </div>
                            )}
                        {(firstDraft === 4 && secondDraft === 4) && (
                            <div className='unit-complete-flower-icon'></div>
                        )}
                        {lastUnitIndex===item.unit_index && (
                            <div className='unit-select-bookmark'></div>
                        )}
                        </div>
                        {/* <span className='absolute top-0 right-0'>{(firstDraft && secondFeedback) ? SvgIconCheck: ''}</span> */}
                    </div>
                    )
                    
                })}
                </div>
            </div>
        )
    }
    
    return (
        <section className='section-common-layout use-nav-aside'>
            {/* page inline header */}
            <SmallHead mainTitle='Writing Activity' subTitle='Spark Writing'/>
            <div className='flex flex-1 flex-col w-full h-fit px-[25px] pb-[25px]'>
            
                {/* page titles */}
                <div className='flex flex-col font-bold w-full justify-start pt-[73.4px] text-black h-1/5 pb-[20px]'>
                    <div className='writing-activity-page-title-div'>
                        <div className='writing-activity-page-title-icon'>
                            <commonIconSvgs.SparkWritingTitleBookIcon/>
                        </div>
                        <span className='writing-activity-page-title-text select-none' >{sparkWritingBookName}</span>
                    </div>
                </div>
                {/* buttons */}
                {/* <div className="flex max-md:flex-col md:flex-row px-12 max-md:mt-[10vhd] md:pt-4 gap-8 w-full justify-center text-center align-middle"> */}
                    <SelectBoxUnitMapLoop items={sparkWritingData} />
                {/* </div> */}
            </div>
            <UnitReportModalComponent />
        </section>
    )
}
