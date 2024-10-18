async function getSubmission(tokenId, callBack) {
    const URL = `https://judge0-ce.p.rapidapi.com/submissions/${tokenId}?base64_encoded=true&fields=*`
    const apiKey = import.meta.env.VITE_JUDGE0_API_KEY;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(URL, options);
        const result = await response.json(); // changed from text() to json()
        return result;
    } catch (error) {
        callBack({ apiStatus: 'error', message: JSON.stringify(error) });
        return; // added return to stop further execution
    }
}

export async function makeSubmission({ code, language, callBack, stdin }) {
    const encodedCode = btoa(code);
    const encodedInput = stdin ? btoa(stdin) : '';
    const URL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*';

    let langId = 54; // Default to C++
    if (language === 'js' || language === 'javascript') {
        langId = 91;
    } else if (language === 'py' || language === 'python') {
        langId = 92;
    }

    const apiKey = import.meta.env.VITE_JUDGE0_API_KEY;
    const httpOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json', // Removed duplicate 'content-type'
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        },
        body: JSON.stringify({
            language_id: langId,
            source_code: encodedCode,
            stdin: encodedInput,
        })
    };

    try {
        callBack({ apiStatus: 'loading' });

        const response = await fetch(URL, httpOptions);
        const result = await response.json(); // Added missing await
        const tokenId = result.token;
        let statusCode = 1; // Assuming it's in the queue
        let apiSubmissionResult;

        while (statusCode === 1 || statusCode === 2) {
            try {
                apiSubmissionResult = await getSubmission(tokenId, callBack);
                statusCode = apiSubmissionResult.status.id;
            } catch (e) {
                callBack({
                    apiStatus: 'error',
                    message: JSON.stringify(e),
                });
                return;
            }
        }

        if (apiSubmissionResult) {
            callBack({
                apiStatus: 'success',
                data: apiSubmissionResult,
            });
        }
    } catch (e) {
        callBack({
            apiStatus: 'error',
            message: JSON.stringify(e),
        });
    }
}
