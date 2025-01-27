import React from 'react'
// function CheckGreenCircleIcon(props: React.SVGAttributes<SVGElement>) {
//     return (
//         <svg {...props} width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g filter="url(#filter0_d_601_3071)">
//         <rect width="30" height="30" rx="15" fill="#21BF60"/>
//         <rect x="1" y="1" width="28" height="28" rx="14" stroke="#51DF8A" strokeWidth="2"/>
//         </g>
//         <path fillRule="evenodd" clipRule="evenodd" d="M21.5082 10.303C21.6999 10.4947 21.8077 10.7548 21.8077 11.026C21.8077 11.2972 21.6999 11.5573 21.5082 11.7491L13.8425 19.4148C13.7412 19.5161 13.621 19.5965 13.4886 19.6513C13.3562 19.7062 13.2143 19.7344 13.0711 19.7344C12.9278 19.7344 12.7859 19.7062 12.6535 19.6513C12.5211 19.5965 12.4009 19.5161 12.2996 19.4148L8.49094 15.6068C8.39326 15.5125 8.31534 15.3996 8.26174 15.2748C8.20814 15.1501 8.17993 15.0159 8.17875 14.8801C8.17757 14.7443 8.20345 14.6096 8.25487 14.4839C8.30629 14.3582 8.38223 14.244 8.47826 14.148C8.57429 14.052 8.68848 13.976 8.81417 13.9246C8.93986 13.8732 9.07453 13.8473 9.21033 13.8485C9.34612 13.8497 9.48032 13.8779 9.6051 13.9315C9.72988 13.9851 9.84273 14.063 9.93707 14.1607L13.0707 17.2943L20.0614 10.303C20.1564 10.2079 20.2691 10.1325 20.3933 10.0811C20.5174 10.0296 20.6504 10.0032 20.7848 10.0032C20.9192 10.0032 21.0522 10.0296 21.1763 10.0811C21.3005 10.1325 21.4132 10.2079 21.5082 10.303Z" fill="white"/>
//         <defs>
//         <filter id="filter0_d_601_3071" x="0" y="0" width="30" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//         <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//         <feOffset dy="2"/>
//         <feComposite in2="hardAlpha" operator="out"/>
//         <feColorMatrix type="matrix" values="0 0 0 0 0.0887153 0 0 0 0 0.608333 0 0 0 0 0.295905 0 0 0 1 0"/>
//         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_601_3071"/>
//         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_601_3071" result="shape"/>
//         </filter>
//         </defs>
//         </svg>
//     )
// }
const CheckGreenCircleIcon = <div className='bg-progress-status-ic-green-check-circle bg-no-repeat bg-cover w-[30px] h-[32px]'/>
function SaveYellowCircleIcon(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg {...props} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="15" fill="#FFC452"/>
        <path d="M23.8136 13.1815V13.1818V20.4545C23.8136 21.1646 23.5316 21.8456 23.0295 22.3477C22.5274 22.8497 21.8464 23.1318 21.1364 23.1318H10.2273C9.51722 23.1318 8.83624 22.8497 8.33415 22.3477C7.83207 21.8456 7.55 21.1646 7.55 20.4545V9.54545C7.55 8.83539 7.83207 8.15442 8.33415 7.65233C8.83624 7.15025 9.51722 6.86818 10.2273 6.86818H17.4995C17.6149 6.87039 17.7288 6.89379 17.8357 6.93723C17.938 6.97906 18.0312 7.04022 18.1103 7.11737C18.1104 7.11744 18.1104 7.11752 18.1105 7.11759L23.5645 12.5716C23.6441 12.6518 23.7071 12.747 23.7499 12.8517C23.7926 12.9564 23.8143 13.0685 23.8136 13.1815ZM12.9545 8.58636H12.9045V8.63636V10.4545V10.5045H12.9545H16.5909H16.6409V10.4545V8.63636V8.58636H16.5909H12.9545ZM18.4091 21.4136H18.4591V21.3636V18.6364C18.4591 18.382 18.358 18.138 18.1782 17.9582C17.9983 17.7783 17.7544 17.6773 17.5 17.6773H13.8636C13.6093 17.6773 13.3653 17.7783 13.1855 17.9582C13.0056 18.138 12.9045 18.382 12.9045 18.6364V21.3636V21.4136H12.9545H18.4091ZM20.1773 21.3636V21.4136H20.2273H21.1364C21.3907 21.4136 21.6347 21.3126 21.8145 21.1327C21.9944 20.9529 22.0955 20.7089 22.0955 20.4545V13.5545V13.5338L22.0808 13.5192L18.4444 9.88282L18.3591 9.79746V9.91818V11.3636C18.3591 11.5915 18.2686 11.81 18.1075 11.9711C17.9464 12.1322 17.7278 12.2227 17.5 12.2227H12.0455C11.8176 12.2227 11.5991 12.1322 11.438 11.9711C11.2769 11.81 11.1864 11.5915 11.1864 11.3636V8.63636V8.58636H11.1364H10.2273C9.97291 8.58636 9.72896 8.6874 9.54909 8.86727C9.36923 9.04713 9.26818 9.29108 9.26818 9.54545V20.4545C9.26818 20.7089 9.36923 20.9529 9.54909 21.1327C9.72896 21.3126 9.97291 21.4136 10.2273 21.4136H11.1364H11.1864V21.3636V18.6364C11.1864 17.9263 11.4684 17.2453 11.9705 16.7432C12.4726 16.2412 13.1536 15.9591 13.8636 15.9591H17.5C18.2101 15.9591 18.891 16.2412 19.3931 16.7432C19.8952 17.2453 20.1773 17.9263 20.1773 18.6364V21.3636Z" fill="white" stroke="#FFC56E" strokeWidth="0.1"/>
        </svg>

    )
}

function RejectRedRectIcon(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg {...props} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="3" fill="#F03063"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 8.29289C12.0976 8.68342 12.0976 9.31658 11.7071 9.70711L8.41421 13L11.7071 16.2929C12.0976 16.6834 12.0976 17.3166 11.7071 17.7071C11.3166 18.0976 10.6834 18.0976 10.2929 17.7071L6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L10.2929 8.29289C10.6834 7.90237 11.3166 7.90237 11.7071 8.29289Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6 13C6 12.4477 6.44772 12 7 12H18C19.3261 12 20.5979 12.5268 21.5355 13.4645C22.4732 14.4021 23 15.6739 23 17C23 18.3261 22.4732 19.5979 21.5355 20.5355C20.5979 21.4732 19.3261 22 18 22H17C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20H18C18.7956 20 19.5587 19.6839 20.1213 19.1213C20.6839 18.5587 21 17.7956 21 17C21 16.2044 20.6839 15.4413 20.1213 14.8787C19.5587 14.3161 18.7956 14 18 14H7C6.44772 14 6 13.5523 6 13Z" fill="white"/>
        </svg>
    )
}
function NoEntryGrayCircleIcon(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg {...props} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="15" fill="#CCCCCC"/>
        <rect x="12.9551" y="12.9546" width="4.09091" height="4.09091" rx="2.04545" fill="#DDDDDD" stroke="white"/>
        <rect x="19.7734" y="12.9546" width="4.09091" height="4.09091" rx="2.04545" fill="#DDDDDD" stroke="white"/>
        <rect x="6.13672" y="12.9546" width="4.09091" height="4.09091" rx="2.04545" fill="#DDDDDD" stroke="white"/>
        </svg>

    )
}
function CheckBlueRectIcon(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32" fill="none">
        <g filter="url(#filter0_d_322_2674)">
            <rect width="30" height="30" rx="3" fill="#5FACF3"/>
            <rect x="1" y="1" width="28" height="28" rx="2" stroke="#B5DBFF" strokeWidth="2"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.3295 10.2998C21.5212 10.4916 21.6289 10.7517 21.6289 11.0228C21.6289 11.294 21.5212 11.5541 21.3295 11.7459L13.6638 19.4116C13.5625 19.5129 13.4422 19.5933 13.3099 19.6481C13.1775 19.703 13.0356 19.7312 12.8923 19.7312C12.7491 19.7312 12.6072 19.703 12.4748 19.6481C12.3424 19.5933 12.2222 19.5129 12.1209 19.4116L8.31223 15.6036C8.21455 15.5093 8.13663 15.3964 8.08303 15.2717C8.02943 15.1469 8.00122 15.0127 8.00004 14.8769C7.99886 14.7411 8.02474 14.6064 8.07616 14.4807C8.12758 14.355 8.20352 14.2409 8.29955 14.1448C8.39558 14.0488 8.50977 13.9729 8.63546 13.9214C8.76114 13.87 8.89582 13.8441 9.03161 13.8453C9.16741 13.8465 9.30161 13.8747 9.42639 13.9283C9.55117 13.9819 9.66402 14.0598 9.75836 14.1575L12.892 17.2911L19.8827 10.2998C19.9777 10.2047 20.0904 10.1294 20.2146 10.0779C20.3387 10.0265 20.4717 10 20.6061 10C20.7405 10 20.8735 10.0265 20.9976 10.0779C21.1217 10.1294 21.2345 10.2047 21.3295 10.2998Z" fill="white"/>
        <defs>
            <filter id="filter0_d_322_2674" x="0" y="0" width="30" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.336458 0 0 0 0 0.527513 0 0 0 0 0.708333 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_2674"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_2674" result="shape"/>
            </filter>
        </defs>
        </svg>
    )
}
function FeedbackEmptyGrayRectIcon(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect width="30" height="30" rx="3" fill="#CCCCCC"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.8636 7.18182C12.8263 7.18182 10.8724 7.99115 9.43177 9.43177C7.99115 10.8724 7.18182 12.8263 7.18182 14.8636C7.18182 16.901 7.99115 18.8549 9.43177 20.2955C10.8724 21.7361 12.8263 22.5455 14.8636 22.5455C16.901 22.5455 18.8549 21.7361 20.2955 20.2955C21.7361 18.8549 22.5455 16.901 22.5455 14.8636C22.5455 12.8263 21.7361 10.8724 20.2955 9.43177C18.8549 7.99115 16.901 7.18182 14.8636 7.18182ZM6 14.8636C6 12.5129 6.93384 10.2584 8.5961 8.5961C10.2584 6.93384 12.5129 6 14.8636 6C17.2144 6 19.4689 6.93384 21.1312 8.5961C22.7934 10.2584 23.7273 12.5129 23.7273 14.8636C23.7273 17.2144 22.7934 19.4689 21.1312 21.1312C19.4689 22.7934 17.2144 23.7273 14.8636 23.7273C12.5129 23.7273 10.2584 22.7934 8.5961 21.1312C6.93384 19.4689 6 17.2144 6 14.8636Z" fill="white" stroke="white" strokeWidth="0.8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.132 8.59586C21.2427 8.70667 21.305 8.85695 21.305 9.01363C21.305 9.17032 21.2427 9.3206 21.132 9.43141L9.43196 21.1314C9.37745 21.1878 9.31225 21.2329 9.24015 21.2638C9.16806 21.2948 9.09052 21.3111 9.01206 21.3118C8.9336 21.3125 8.85579 21.2975 8.78317 21.2678C8.71055 21.2381 8.64457 21.1942 8.58909 21.1387C8.53361 21.0833 8.48973 21.0173 8.46002 20.9447C8.43031 20.872 8.41536 20.7942 8.41604 20.7158C8.41672 20.6373 8.43302 20.5598 8.46399 20.4877C8.49496 20.4156 8.53998 20.3504 8.59641 20.2959L20.2964 8.59586C20.4072 8.48508 20.5575 8.42285 20.7142 8.42285C20.8709 8.42285 21.0211 8.48508 21.132 8.59586Z" fill="white" stroke="white" strokeWidth="0.8"/>
        </svg>
    )
}
// function LevelSelectToggleDownArrowIcon(props: React.SVGAttributes<SVGElement>) {
//     return (
//         <svg {...props} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g filter="url(#filter0_d_482_870)">
//         <path d="M0.362179 5.07226C0.210026 4.27922 0.514514 2.47629 3.13783 2.25512C6.16156 2.00019 9.16156 2.00008 12.1472 2.17673C14.6616 2.25517 18.4638 2.96055 13.8301 9.21268C10.0447 14.326 7.93758 15.0729 5.15732 12.7307C2.38167 10.3838 0.790975 7.33612 0.362179 5.07226Z" fill="#757D9A"/>
//         </g>
//         <defs>
//         <filter id="filter0_d_482_870" x="0.330078" y="2.05273" width="15.6826" height="12.9473" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//         <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//         <feOffset dy="1"/>
//         <feComposite in2="hardAlpha" operator="out"/>
//         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
//         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_482_870"/>
//         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_482_870" result="shape"/>
//         </filter>
//         </defs>
//         </svg>
//     )
// }
// function LevelSelectToggleUpArrowIcon(props: React.SVGAttributes<SVGElement>) {
//     return (
//         <svg {...props} style={{transform: 'rotate(180deg)'}} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g filter="url(#filter0_d_482_870)">
//         <path d="M0.362179 5.07226C0.210026 4.27922 0.514514 2.47629 3.13783 2.25512C6.16156 2.00019 9.16156 2.00008 12.1472 2.17673C14.6616 2.25517 18.4638 2.96055 13.8301 9.21268C10.0447 14.326 7.93758 15.0729 5.15732 12.7307C2.38167 10.3838 0.790975 7.33612 0.362179 5.07226Z" fill="#757D9A"/>
//         </g>
//         <defs>
//         <filter id="filter0_d_482_870" x="0.330078" y="2.05273" width="15.6826" height="12.9473" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//         <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//         <feOffset dy="1"/>
//         <feComposite in2="hardAlpha" operator="out"/>
//         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
//         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_482_870"/>
//         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_482_870" result="shape"/>
//         </filter>
//         </defs>
//         </svg>
//     )
// }

function NoEntryGrayRectIcon(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect width="30" height="30" rx="3" fill="#CCCCCC"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.8636 7.18182C12.8263 7.18182 10.8724 7.99115 9.43177 9.43177C7.99115 10.8724 7.18182 12.8263 7.18182 14.8636C7.18182 16.901 7.99115 18.8549 9.43177 20.2955C10.8724 21.7361 12.8263 22.5455 14.8636 22.5455C16.901 22.5455 18.8549 21.7361 20.2955 20.2955C21.7361 18.8549 22.5455 16.901 22.5455 14.8636C22.5455 12.8263 21.7361 10.8724 20.2955 9.43177C18.8549 7.99115 16.901 7.18182 14.8636 7.18182ZM6 14.8636C6 12.5129 6.93384 10.2584 8.5961 8.5961C10.2584 6.93384 12.5129 6 14.8636 6C17.2144 6 19.4689 6.93384 21.1312 8.5961C22.7934 10.2584 23.7273 12.5129 23.7273 14.8636C23.7273 17.2144 22.7934 19.4689 21.1312 21.1312C19.4689 22.7934 17.2144 23.7273 14.8636 23.7273C12.5129 23.7273 10.2584 22.7934 8.5961 21.1312C6.93384 19.4689 6 17.2144 6 14.8636Z" fill="white" stroke="white" strokeWidth="0.8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.132 8.59586C21.2427 8.70667 21.305 8.85695 21.305 9.01363C21.305 9.17032 21.2427 9.3206 21.132 9.43141L9.43196 21.1314C9.37745 21.1878 9.31225 21.2329 9.24015 21.2638C9.16806 21.2948 9.09052 21.3111 9.01206 21.3118C8.9336 21.3125 8.85579 21.2975 8.78317 21.2678C8.71055 21.2381 8.64457 21.1942 8.58909 21.1387C8.53361 21.0833 8.48973 21.0173 8.46002 20.9447C8.43031 20.872 8.41536 20.7942 8.41604 20.7158C8.41672 20.6373 8.43302 20.5598 8.46399 20.4877C8.49496 20.4156 8.53998 20.3504 8.59641 20.2959L20.2964 8.59586C20.4072 8.48508 20.5575 8.42285 20.7142 8.42285C20.8709 8.42285 21.0211 8.48508 21.132 8.59586Z" fill="white" stroke="white" strokeWidth="0.8"/>
        </svg>
    )
}
const EntryBlueIcon = <div className='bg-progress-status-ic-blue-entry-circle bg-no-repeat bg-cover w-[30px] h-[30px]'/>;
const WaitFeedbackBlueRectIcon = <div className='bg-progress-status-ic-blue-wait-rect bg-no-repeat bg-cover w-[30px] h-[30px]' />
const RecycleRedCircleIcon = <div className='bg-progress-status-ic-red-recycle-circle bg-no-repeat bg-cover w-[30px] h-[30px]'/>
const LevelSelectToggleDownArrowIcon = () => <div className='bg-select-box-down-ic-arrow bg-no-repeat bg-contain w-[24px] h-[16px] mr-[13px]'/>
const LevelSelectToggleUpArrowIcon = () => <div className='bg-select-box-down-ic-arrow bg-no-repeat bg-contain w-[24px] h-[16px] mr-[13px] rotate-180'/>

export const progressIcons = {
    CheckGreenCircleIcon,
    SaveYellowCircleIcon,
    RecycleRedCircleIcon,
    RejectRedRectIcon,
    NoEntryGrayCircleIcon,
    NoEntryGrayRectIcon,
    CheckBlueRectIcon,
    FeedbackEmptyGrayRectIcon,
    LevelSelectToggleDownArrowIcon,
    LevelSelectToggleUpArrowIcon,
    WaitFeedbackBlueRectIcon,
    EntryBlueIcon
}