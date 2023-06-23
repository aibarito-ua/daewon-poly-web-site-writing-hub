export const EssayWritingDatas = {
    HeadTexts: [
        'Essay Outliner will generate an outline for a topic.',
        'Enter Essay Title in the below black.'
    ],
    mainTitleNumbering : /^(i.|ii.|iii.|iv.|v.|vi.|vii.|viii.|ix.|x.)/gi,
    subTitleNumbering: /^(a.|b.|c.|d.|e.|f.|g.|h.)/gi,
    inputButtonTexts: [
        'ASK'
    ],
    editButtonTexts: [
        'Edit'
    ],
    displayEssayOutliners: [
        {
            Topic: 'How to write essays well.',
            Text: `I. Introduction:\nA. Hook: Have you ever had to write an essay and didn't know where to start?\nB. Thesis Statement: Writing essays can be tough, but with a few tips and tricks, you can become a pro!\n\nII. Body Paragraph 1:\nA. Topic Sentence: The first step to writing a great essay is to pick a topic that you're interested in.\nB. Supporting Evidence: Think about what you're passionate about or what you want to learn more about.\nC. Explanation: When you're interested in the topic, it's easier to write and you'll be more motivated to do a good job.\n\nIII. Body Paragraph 2:\nA. Topic Sentence: Once you have your topic, it's important to do some research.\nB. Supporting Evidence: Look for information in books, articles, and online sources.\nC. Explanation: The more you know about your topic, the better your essay will be.\n\nIV. Body Paragraph 3:\nA. Topic Sentence: When you start writing, make sure to have a clear structure.\nB. Supporting Evidence: Use an outline or graphic organizer to organize your thoughts.\nC. Explanation: This will help you stay on track and make sure your essay flows well.\n\nV. Conclusion:\nA. Summary of Main Points: To write a great essay, pick a topic you're interested in, do some research, and have a clear structure.\nB. Final Statement: With these tips, you'll be writing amazing essays in no time!`
        },
        {
            Topic: 'How to write essays well.2',
            Text: `I. Introduction:\nA. Hook: Have you ever had to write an essay and didn't know where to start?\nB. Thesis Statement: Writing essays can be tough, but with a few tips and tricks, you can become a pro!\n\nII. Body Paragraph 1:\nA. Topic Sentence: The first step to writing a great essay is to pick a topic that you're interested in.\nB. Supporting Evidence: Think about what you're passionate about or what you want to learn more about.\nC. Explanation: When you're interested in the topic, it's easier to write and you'll be more motivated to do a good job.\n\nIII. Body Paragraph 2:\nA. Topic Sentence: Once you have your topic, it's important to do some research.\nB. Supporting Evidence: Look for information in books, articles, and online sources.\nC. Explanation: The more you know about your topic, the better your essay will be.\n\nIV. Body Paragraph 3:\nA. Topic Sentence: When you start writing, make sure to have a clear structure.\nB. Supporting Evidence: Use an outline or graphic organizer to organize your thoughts.\nC. Explanation: This will help you stay on track and make sure your essay flows well.\n\nV. Conclusion:\nA. Summary of Main Points: To write a great essay, pick a topic you're interested in, do some research, and have a clear structure.\nB. Final Statement: With these tips, you'll be writing amazing essays in no time!`
        },
        {
            Topic: '',
            Text: 'I will make my own outliner.'
        }
    ],
    selectBoxTopics: [
        
        {
            title: {main: 'Unit 1', sub: 'Descriptive Essays'}, 
            topic: 'How to write essays well.', topicIndex: 1, progress: [0,-1], 
        },
        {title: {main: 'Unit 2', sub: 'Informative Essays'}, topic: 'How to write essays well.', topicIndex: 1, progress: [0,-1]},
        {title: {main: 'Unit 3', sub: 'Personal Narratives'}, topic: 'How to write essays well.', topicIndex: 1, progress: [0,-1]},
        {title: {main: 'Unit 4', sub: 'Science Fiction Short Stories'}, topic: 'How to write essays well.', topicIndex: 1, progress: [0,-1]},
        {title: {main: 'Unit 5', sub: 'Persuasive Essays'}, topic: 'How to write essays well.', topicIndex: 1, progress: [0,-1]},
        
    ],
    // name: 'Unit_1_1',
    // class: 'GT4',
    // semester: '2',
    // topic: 'Descriptive Essay',
    // format_type: 'OL01',
    outlineData: [
        {
            "name": "Unit_1_1",
            "class": ["GT4"],
            "semester": "2",
            "topic": "Descriptive Essays",
            "format_type": "OL01",
            "CheckWriting": "5",
            "Title": [
                "Write a title that matches the main idea of your essay.", {
                    "id": "Title_1",
                    "text": "",
                    "inputIndex": 0,
                    "placeholder": " Start typing in your title ..."
            }],
            "Introduction": [
                "Begin writing your introduction by explaining why the topic is special or by stating an interesting fact about the topic.",{
                    "id": "Introduction_1",
                    "text": "",
                    "inputIndex": 1,
                    "placeholder": " Start typing in the beginning ..."
                },
            ],
            "Body": [
                "",
                [
                    "Body Paragraph 1: Start the first paragraph with a sentence that introduces one detail of the special object. Add details that support the topic sentence.",{
                        "id": "Body_1",
                        "text": "",
                        "inputIndex": 2,
                        "placeholder": " Start typing in your first event ..."
                    }, "Body Paragraph 2: Start the second paragraph with a sentence that introduces another detail of the special object. Add details that support the topic sentence.",{
                        "id": "Body_2",
                        "text": "",
                        "inputIndex": 3,
                        "placeholder": " Start typing in your second event ..."
                    },
                ]
            ],
            "Conclusion": [
                "Begin the conclusion by restating why the object is special or by asking a question.",{
                    "id": "Conclusion_1",
                    "text": "",
                    "inputIndex": 4,
                    "placeholder": " Start typing in your ending ..."
                }
            ]
        },
        {
            "name": "Unit_2_1",
            "class": ["GT4"],
            "semester": "2",
            "topic": "Informative Essays",
            "format_type": "OL01",
            "CheckWriting": "5",
            "Title": [
                "Write a title that matches the main idea of your essay.",{
                    "id": "Title_1",
                    "text": "",
                    "inputIndex": 0,
                    "placeholder": " Start typing in your title ..."
            }],
            "Introduction": [
                "Begin the introduction with a question or with an interesting fact.",{
                    "id": "Introduction_1",
                    "text": "",
                    "inputIndex": 1,
                    "placeholder": " Start typing in the beginning ..."
                },
            ],
            "Body": [
                "",
                [
                    "Body Paragraph 1: Start with a topic sentence and then include details to support the topic.",{
                        "id": "Body_1",
                        "text": "",
                        "inputIndex": 2,
                        "placeholder": " Start typing in your first event ..."
                    }, "Body Paragraph 2: Start with a topic sentence and then include details to support the topic.",{
                        "id": "Body_2",
                        "text": "",
                        "inputIndex": 3,
                        "placeholder": " Start typing in your second event ..."
                    },
                ]
            ],
            "Conclusion": [
                "Begin the conclusion by restating the focus statement and adding a final thought or by restating the focus statement and summing up the essay.",{
                    "id": "Conclusion_1",
                    "text": "",
                    "inputIndex": 4,
                    "placeholder": " Start typing in your ending ..."
                }
            ]
        },
        {
            "name": "Unit_3_1",
            "class": ["GT4"],
            "semester": "2",
            "topic": "Personal Narratives",
            "format_type": "OL02",
            "CheckWriting": "6",
            "Title": ["Write a title that matches the main idea of your narrative.",{
                "id": "Title_1",
                "text": "",
                "inputIndex": 0,
                "placeholder": " Start typing in your title ..."
            }],
            "Beginning": [
                "Start writing the beginning of your personal narrative by putting yourself in the middle of the action or by asking a question and then stating the main idea.",{
                    "id": "Beginning_1",
                    "text": "",
                    "inputIndex": 1,
                    "placeholder": " Start typing in the beginning ..."
                },
            ],
            "Middle": [
                "",
                [
                    "Event 1: Write what happens first in your personal narrative.",{
                        "id": "Middle_1",
                        "text": "",
                        "inputIndex": 2,
                        "placeholder": " Start typing in your first event ..."
                    },
                        "Event 2: Write what happened next.",{
                            "id": "Middle_2",
                            "text": "",
                            "inputIndex": 3,
                            "placeholder": " Start typing in your second event ..."
                    },
                        "Event 3: Write what happens after that.",{
                            "id": "Middle_3",
                            "text": "",
                            "inputIndex": 4,
                            "placeholder": " Start typing in your second event ..."
                    },
                ]
            ],
            "End": [
                "Start writing the end of your personal narrative by explaining what you learned or by explaining how you feel now.",{
                    "id": "End_1",
                    "text": "",
                    "inputIndex": 5,
                    "placeholder": " Start typing in your ending ..."
                }
            ]
        },
        {
            "name": "Unit_4_1",
            "class": ["GT4"],
            "semester": "2",
            "topic": "Realistic Fiction",
            "format_type": "OL03",
            "CheckWriting": "7",
            "Title": [
                "Write a title that matches your realistic fiction story.",{
                    "id": "Title_1",
                    "text": "",
                    "inputIndex": 0,
                    "placeholder": " Start typing in your title ..."
                }],
            "Beginning": [
                "Start your story by beginning with dialogue or by providing some background information.",{
                    "id": "Beginning_1",
                    "text": "",
                    "inputIndex": 1,
                    "placeholder": " Start typing in the beginning ..."
                },
                "Setting/problem: Write where the story takes place and what problem the characters face.",{
                    "id": "Beginning_2",
                    "text": "",
                    "inputIndex": 2,
                    "placeholder": " Start typing in the beginning ..."
                },
            ],
            "Middle": [
                "",
                [
                    "Event 1: Write what the character(s) do first to try and solve the problem.",{
                        "id": "Middle_1",
                        "text": "",
                        "inputIndex": 3,
                        "placeholder": " Start typing in your first event ..."
                    },
                    "Event 2: Write what do they do next.",{
                        "id": "Middle_2",
                        "text": "",
                        "inputIndex": 4,
                        "placeholder": " Start typing in your second event ..."
                    },
                    "Event 3: Write what do they do last.",{
                        "id": "Middle_3",
                        "text": "",
                        "inputIndex": 5,
                        "placeholder": " Start typing in your second event ..."
                    },
                ]
            ],
            "End": [
                "How does the problem get solved? Explain how the main character feels after the problem is resolved.",{
                    "id": "End_1",
                    "text": "",
                    "inputIndex": 6,
                    "placeholder": " Start typing in your ending ..."
                }
            ]
        },
        {
            "name": "Unit_5_1",
            "class": ["GT4"],
            "semester": "2",
            "topic": "Persuasive Essays",
            "format_type": "OL04",
            "CheckWriting": "6",
            "Title": [
                "Write a title that matches the main idea of your essay.",{
                    "id": "Title_1",
                    "text": "",
                    "inputIndex": 0,
                    "placeholder": " Start typing in your title ..."
            }],
            "Introduction": [
                "Start the introduction by explaining how you became interested in the topic or by asking a question. Then write your opinion statement.",{
                    "id": "Introduction_1",
                    "text": "",
                    "inputIndex": 1,
                    "placeholder": " Start typing in the beginning ..."
                },
            ],
            "Body": [
                "",
                [
                    "Reason 1: State the first reason for your opinion. Then give strong details that support the reason.",{
                        "id": "Body_1",
                        "text": "",
                        "inputIndex": 2,
                        "placeholder": " Start typing in your first event ..."
                    }, "Reason 2: State the second reason for your opinion. Then give strong details that support the reason.",{
                        "id": "Body_2",
                        "text": "",
                        "inputIndex": 3,
                        "placeholder": " Start typing in your second event ..."
                    }, "Reason 3: State the third reason for your opinion. Then give strong details that support the reason.",{
                        "id": "Body_3",
                        "text": "",
                        "inputIndex": 4,
                        "placeholder": " Start typing in your second event ..."
                    },
                ]
            ],
            "Conclusion": [
                "Begin the conclusion by repeating the opinion statement and then ending with a call to action or by ending with a call to action and then repeating the opinion statement.",{
                    "id": "Conclusion_1",
                    "text": "",
                    "inputIndex": 5,
                    "placeholder": " Start typing in your ending ..."
                }
            ]
        },
    ],
}


// `
// My hand were shaking as I walk out of my house the last Monday. It wasn’t just a regurar Monday, but it was my first Monday at a new school.\n
// I had no friend, and I didn’t even know who the my teacher was. All I was hope for was for the day to go by quick so I could return to my cozy ed.\n\n
// The school bus pulled up to the bus stop and I took a deep breathing as I stepped on the bus. The kids were yell and play, but they all stopped and stared at me. I slid into the first empty seat I could find. After the bus pulled up to school, all the kids want to their classroom. I didn’t know where to go.\n
// The bus driver honked the hon and pointed the school, but it was raining too hard for me to hear what he was saying. I stood in the rain and stared at the enomous building. Then I felt a warm hands on my arm. It was a girl.\n
// She sai that her name was sally. She was in the 4th grade, and it was her first day, too! Since we are both feeling nervous, we decided to stick together and help each other. Sally and I walked into the school together as brave as two 4th grade kids can be.\n\n
// Although my first day was still scared, Sally made it easier. When I realized I had forgot to bring a drink for lunch, Sally shared hers with me. When Sally couldn’t figure a math problem, I showed her how to find the answer. I learned that if
// `