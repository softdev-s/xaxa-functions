import fetch from 'node-fetch';

exports.handler = async function () {
    const body = {
        page: {
            size: 15,
        },
    };

    const response = await fetch(
        `${process.env.XATA_URL}:main/tables/userDetails/query`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.XATA_API_KEY}`,
            },
            body: JSON.stringify(body),
        }
    );
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};