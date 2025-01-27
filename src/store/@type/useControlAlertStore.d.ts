interface IUseControlAlertStore {
    
    commonAlertOpenFlag: boolean;
    commonAlertMessage: (string|JSX.Element)[];
    commonAlertHeadTitle:string;
    commonAlertYesLabel:string;
    commonAlertNoLabel:string;
    commonAlertYesFunctionEvent: Function|null;
    commonAlertCloseEvent:Function|null;
    commonAlertOneButton: boolean;
    commonAlertType: TAlertType;
    commonAlertMessageFontFamily: TCommonAlertOpenOptionFontFamily;
    commonAlertPriorityLevel:0|1|2|3;
    commonAlertYesEventDelay: number;
    commonAlertCloseEventDelay: number;

    // todo: delete
    commonAlertControllerFlag : number;

    commonAlertOpen: (option?: TCommonAlertOpenOptions ) => void;
    commonAlertClose: () => void;
    setCommonAlertMessage: (messages: string[]) => void;
    setCommonAlertHeadTitle: (title:string) =>void;

    // standby screen
    commonStandbyScreen: TCommonStandbyScreen,
    setCommonStandbyScreen: (controlData:TCommonStandbyScreen) => void;

    // return 1st draft reason alert
    return1stDraftReasonAlert: TReturn1stDraftReasonAlertValue,
    setReturn1stDraftReasonAlertOpen: (value:TReturn1stDraftReasonAlertValue) => void;

    // unit report modal
    unitReportModalData: TUnitReportModalData;
    unitReportModal: TUnitReportModal;
    initializeUnitReportModal: TUnitReportModal;
    setUnitReportModal: (controlData: TUnitReportModal)=>void;

    // unit report score modal data
    unitRubricScoresData : TUnitScoreData,
    setUnitRubricScoresData: (data: TOverallReportByStudent, unit_index:number)=>void;

    // get report api data
    reportAPIData: TReportByStudentResponse;
    setReportAPIData: (data:TReportByStudentResponse) => void;
    setSelectReportData: (
        data:TReportByStudentResponse,
        year:number,
        semester:number,
        level:string,
        renderInit?:boolean
    ) => void;
    // overall report - bar chart data selected
    reportSelectedOverallBarChart: TOverallBarChartDataItem[];
    // overall report - pie chart data selected
    reportSelectedOverallPieChart: TAllDoughnutDatas;
    // select datas
    reportSelectFinder: TDropdownSelectBoxDataTypes;
    reportSelectBoxDatas: TReportPageSelectBoxDatas[];
    // report semester
    reportSemester: string;
    reportLevel: string;
    setReportSelectBoxValue: (data:{
        data:TDropdownSelectBoxDataTypes;
        semester?:string;
        level?:string;
        init?:boolean;
        renderInit?:boolean;
    })=>void;
    setReportSelectBoxDatas: (data: TReportPageSelectBoxDatas[])=>void;
    setReportSelectedFinder: (data:TDropdownSelectBoxDataTypes)=>void;
    
    // report select unit
    reportSelectUnit: number;
    setReportSelectUnit: (unit_index: number) => void;
    reportSelectBookName:string;
    // selected rubric all data
    reportModalRubricData: TRubricInfo[];
    unitReportsData: TUnitReportsData[];

    unitReportData: TReportByStudent;
    setUnitReportData: (data:TReportByStudent) => void;

    reportByUnitMainTitle: string;
    // setReportByUnitMainTitle: (title:string) => void;

    // filter된 report data
    reportSelectData: TReportByStudentPeriodLevel;
    // report control. prev&next
    // unit index array value
    reportCompletedUnitIndexArray: number[];

    // report box readonly forced
    forcedReadOnlyReportSelectBox: boolean[];
    setForcedReadOnlyReportSelectBox: (flags: boolean[]) => void;
    
    // progress select box
    progressLevelBoxValue: string;
    progressAllLevelsValue: string[];
    setProgressAllLevelBoxValues: (data: string[]) => void;
    setProgressLevelBoxValue: (level:string, userInfo: TUserInfoData, isDefault:boolean) => void;
    
    // teacher feedback modal checked
    teacherFeedbackModalChecked: TTeacherFeedbackModalChecked[];
    setTeacherFeedbackModalChecked: (isChecked:boolean, index:number) => void;
    setTeacherFeedbackInit: () => void;

    // report display
    // no data controller
    isNoData:boolean;
    setIsNoData: (flag:boolean) => void;

    // OCR modal
    ocrModalData: TOcrModalData;
    setOcrModalData: (data: TOcrModalData) => void;
    
    // report buttons at unmount event
    setResetReportDatas: () => void;
}

type TTeacherFeedbackModalChecked = {
    index:number;
    isChecked: boolean;
}
type TDropdownSelectBoxDataTypes = {
    year: number, semester:number, level:string, label:string
}
// new report select box controller
type TReportPageSelectBoxDatas = {
    label: string,
    semester: number,
    year: number,
    level: {
        name: string
    }[]
}

type TAllDoughnutDatas = TAllDoughnutDataItem[];
type TAllDoughnutDataItem = {
    target: string;
    data: {
        name: string;
        value: number;
        selectName: string;
        fillColor: string;
        fillBorderColor: string;
    }[];
    addWidth: number;
    fitText: number;
    toolLineColor: string;
}
type TOverallBarChartDataItem = {
    name: string;
    target: string;
    unit1: number;
    unit2: number;
    unit3: number;
    unit4: number;
    unit5: number;
    amt: number;
}
type TAlertType = ''|'warning'|'continue'|'warningContinue';
type TReturn1stDraftReasonAlertValue = {
    openFlag: boolean;
    returnReason: string;
    returnTeacherComment: string;
    yesEvent?:Function,
    NoEvent?:Function,
}
type TCommonAlertOpenOptions = {
    head?:string,
    yesButtonLabel?:string,
    noButtonLabel?:string,
    messages?:(string|JSX.Element)[],
    yesEvent?:Function,
    closeEvent?:Function,
    useOneButton?:boolean,
    alertType?: TAlertType,
    messageFontFamily?:TCommonAlertOpenOptionFontFamily,
    priorityLevel?:0|1|2|3,
    yesEventDelay?:number,
    closeEventDelay?: number,
}
type TCommonAlertOpenOptionFontFamily = 'Roboto'|'NotoSansCJKKR'|''

// standby screen
type TCommonStandbyScreen = {
    openFlag: boolean
}
// unit report modal
type TUnitReportModal = {
    open: boolean,
}
// one report by student api data
type TReportByStudent = {
    is_completed:boolean;
    word_counts:TReportByStudentWordCount[];
    grammar_correction: {
        grammar: TReportByStudentGrammarCorrectionItem;
        punctuation:TReportByStudentGrammarCorrectionItem;
        spelling:TReportByStudentGrammarCorrectionItem;
    };
    teacher_comments: TReportByStudentTeacherComment[];
    rubric: TReportByStudentRubric;
    completion_date: TReportByStudentCompletionDate[];
}
type TReportByStudentPortfolio = {
    content:string;
    name:string;
    order_index:number;
}
type TReportByStudentCompletionDate = {
    draft_index:number;
    date: string;
}
type TReportByStudentRubric = {
    overall_score: number;
    categories: TReportByStudentRubricCategory[];
}
type TReportByStudentRubricCategory = {
    category: string;
    score: number;
    description: string;
}
type TReportByStudentTeacherComment = {
    draft_index:number;
    comment: string;
}
type TReportByStudentGrammarCorrectionItem = {
    sentences: TReportByStudentGrammarCorrectionSentencesItem[][];
    sentences_count:number;
    corrections_count:number;
}
type TReportByStudentGrammarCorrectionSentencesItem={
    type:number;
    word:string;
    correction_reason:string[];
    key:string;
}
type TReportByStudentWordCount = {
    draft_index: number;
    word_count:number;
    sentence_count:number;
}

// REPORT API Response Data
// overall data by student
type TReportByStudentResponse = {
    periods: TReportByStudentPeriod[]
}
type TReportByStudentPeriod = {
    year:number;
    semester: number;
    levels: TReportByStudentPeriodLevel[]
}
type TReportByStudentPeriodLevel = {
    level_name:string;
    book_name:string;
    class_name:string;
    rubric_info: TRubricInfo[];
    overall_report: TOverallReport[];
    unit_reports: TUnitReportsData[];
}
type TUnitReportsData = {
    unit_index:number;
    report: TReportByStudent;
}
// overall_report
type TOverallReport = {
    unit_index:number;
    categories: TOverallReportCategory[]
}
type TOverallReportCategory = {
    category: string;
    score: number;
    description:string;
}

type TRubricInfo = {
    unit_index:number;
    rubric: TRubricContent;
}
type TRubricContent = {
    name:string;
    rubric_description: TRubricTypeDataItem[];
}
// rubric
type TRubricTypeDataItem = {
    [key in TRubricTypeHeaderAccessor]: string | string[];
} & {
    "category": string;
    "explanation": string[];
    "excellent": string;
    "very_good":string;
    "good":string;
    "fair":string;
    "poor":string;
};
type TRubricTypeHeaderAccessor="category"|"explanation"|"excellent"|"very_good"|"good"|"fair"|"poor";
type TRubricTypeHeader = {
    accessor: TRubricTypeHeaderAccessor
    header: string
}
type TRubricTypeData = {
    dataHead: TRubricTypeHeader[],
    data: TRubricTypeDataItem[]
}


type TUnitReportModalData = {
    wordCountSummary: TWordCountSummaryItem,
    correctionSummary: TCorrectionSummaryItem
}
type TWordCountSummaryItem = {
    title: string;
    draft_1st: {
            label: string,
            value: number,
        }[];
    draft_2nd: {
            label: string,
            value: number,
        }[];
}
// normal report correction type
type TCorrectionSummaryItem = {
    title: string;
    correction: {
        reason: 'grammar'|'spelling'|'punctuation',
        list: TCorrectionSentence[]
    }[]
}
type TCorrectionSentence = TCorrectionWord[];
type TCorrectionWord = [number, string];

type TAdminCommentsItem = {

}

// Report data
type TPrintReportDoughnutData ={
    target: string;
    data: {
        name: string;
        value: number;
    }[];
    addWidth: number;
    fitText: number;
}
type TUnitScoreData = {
    averageChartData: {
        dataPayload: TPrintReportDoughnutData
    };
    barChartData: TBarChartsData[];
    unitsData: TOverallReportByStudentUnitItem[];
    hexagonChartData: THexagonDoughnutData[];
    reportByUnit: TReportByUnitInfo;
}
type TReportByUnitInfo = {
    selectUnitInfo: {
        unit_index: number
    }
}
type TRubricScore = {
    name: string,
    score: number
}
type TUnitRubricScore = {
    unit_index: number,
    rubric_scores: TRubricScore[]
}
type TBarChartsData = {
    name: string;
    score: number;
    colors: {
        start: string;
        end: string;
    };
    customY: number;
}
type THexagonDoughnutData = {
    target: string;
    data: {
        name: string;
        value: number;
        selectName: string;
        fillColor: string;
        fillBorderColor: string;
        tooltip: {
            title:string,
            content: string
        };
        circleBaseLineColor: string;
    }[];
    addWidth: number;
    fitText: number;
    toolLineColor: string;
}

// OCR data
type TOcrModalData = {
    /** 팝업 표시 중 유무 */
    openFlag: boolean;
    /** 제목 or 본문 */
    textType?: 'title' | 'content';
    /** 입력된 텍스트 */
    inputText?: string;
    /** 선택된 이미지 */
    imgFile?: File;
    /** OCR 결과 전달 콜백 */
    onResOcrEvent?: Function;
};
