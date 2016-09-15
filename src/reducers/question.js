const questionsMocked = [
	
	{ 
		'questions' : ['What is 10 + 4?', '12', '14', '16', 'B' ]
	},
	{
		'questions': ['What is 22 + 4?', '22', '24', '26', 'C' ]
	},
	{
		'questions': ['Who is president of Poland?', 'Duda', 'Wales', 'Szydlo', 'A' ]
	},
	{
		'questions': ['What is highest mountain in Poland?', 'Rysy', 'Giewont', 'Kozi Wierch', 'A' ]
	}

]



const question = (state = questionsMocked, action) => {
    switch (action.type) {
        case 'RETURN_ALL_QUESTIONS':
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default question;