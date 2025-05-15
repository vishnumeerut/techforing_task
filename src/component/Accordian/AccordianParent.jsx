import Accordian from "./Accordian";


function AccordianParent() {
    const faqData = [
        {
          id: 1,
          title: "Sales & Marketing",
          answer: "React is a JavaScript library for building user interfaces, maintained by Facebook."
        },
        {
          id: 2,
          title: "Creative",
          answer: "A component is a reusable piece of UI that can be a function or a class."
        },
        {
          id: 3,
          title: "Human Resource",
          answer: "JSX stands for JavaScript XML. It allows you to write HTML inside JavaScript."
        },
        {
          id: 4,
          title: "Administration",
          answer: "State is an object that determines how a component renders and behaves."
        },
        {
          id: 5,
          title: "Digital Marketing",
          answer: "Props are inputs to components. They are passed down from parent to child."
        },
        {
          id: 6,
          title: "Development",
          answer: "The useState Hook lets you add React state to functional components."
        },
        {
          id: 7,
          title: "Engineering",
          answer: "The useEffect Hook lets you perform side effects in function components."
        },
        
      ];
    return (
        <div>
            <h1 className="text-center lg:text-4xl mt-12 mb-4 font-bold">BROWSE OPEN POSITION BY CATEGORY</h1>
            <p className="lg:text-center text-center lg:mx-0 mx-14 lg:w-[100%]  w-[70%] mb-8 text-gray-500">We are always on the lookout for the talented People.</p>
            <Accordian faqData={faqData}/>
        </div>
    )
}

export default AccordianParent;