import React from "react"
//  import Questions from "./Questions"


export default function Main() {
    // const [questions,setQuestions] = React.useEffect()
    const [questionsData, setQuestionsData] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(res => res.json())
            .then(results => setQuestionsData(results))
    }, [])

    console.log(questionsData)



    return (
        <div>

        {/* <pre>{JSON.stringify(questionsData)}</pre> */}

        {/* {questionsData.map((item)=> <p>{item.category}</p>)} */}

        </div>
    )
}

// 