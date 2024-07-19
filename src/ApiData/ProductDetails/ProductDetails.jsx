import { CiMail } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegRectangleList } from "react-icons/fa6";
export const footerData = [
    {
        title:"Support",
        options: [
            {
                name: "Help Centre",
                link: ""
            },
            {
                name: "AirCover",
                link: ""
            },
            {
                name: "Anti-discrimination",
                link: ""
            },
            {
                name: "Disability support",
                link: ""
            },
            {
                name: "Cancellation options",
                link: ""
            },
            {
                name: "Report neighbourhood concern",
                link: ""
            }
        ]
    },
    {
        title:"Hosting",
        options: [
            {
                name: "Airbnb your home",
                link: ""
            },
            {
                name: "AirCover for Hosts",
                link: ""
            },
            {
                name: "Hosting resources",
                link: ""
            },
            {
                name: "Community forum",
                link: ""
            },
            {
                name: "Hosting responsibly",
                link: ""
            },
            {
                name: "Join a free Hosting class",
                link: ""
            }
        ]
    },
    {
        title:"Airbnb",
        options: [
            {
                name: "Newsroom",
                link: ""
            },
            {
                name: "New features",
                link: ""
            },
            {
                name: "Careers",
                link: ""
            },
            {
                name: "Investors",
                link: ""
            },
            {
                name: "Airbnb.org emergency stays",
                link: ""
            }
        ]
    }
]

export const Cart = [
    {
        options: [
            {
                name: "Share",
                link:""
            },
             {
                name: "Save",
                link:""
            }
        ]
    }
]

export const informationData = [
    {
        icon:<CiMail />,
        title: "Request to book",
        paragraph: "Choose your dates, add your guests, then answer a question about why you want to go."
        
    },
    {
        icon:<CiCircleCheck />,
        title: "Selection process",
        paragraph: "First, we’ll randomly choose a set of potential guests. Next, we’ll review their answers for unique perspectives and connections to the icon. Then, we’ll invite selected guests to book."
        
    },
    {
        icon:<FaRegRectangleList />,
        title: "Requirements",
        paragraph:"You’ll need an active Airbnb account and the app to participate, and be a resident of an eligible country or region. It doesn’t cost anything to submit a request."
    }

]
export const ThingsData = [
    {
        title: "Things to know",
        para1: "The basics",
        para2: "Check-in after 3:00 pm",
        para3: "Checkout before 6:00 pm",
        para4: "4 guests maximum",
        link: "Show more",
    },
    {
        para1: "Safety & property",
        para2: "Exterior security cameras on property",
        para3: "Carbon monoxide alarm",
        para4: "Smoke alarm",
        link: "Show more",
    }
]











