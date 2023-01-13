import fetch from 'node-fetch';

exports.handler = async function (event, context, callback) {
    let bodyRequest = JSON.parse(event.body);
    const body = {
        firstName: bodyRequest.firstName,
        lastName: bodyRequest.lastName,
        phoneNumber: bodyRequest.phoneNumber,
        avatar: 'https://res.cloudinary.com/dtgbzmpca/image/upload/v1667083687/abstract-user-flat-4.png',
    };

    const response = await fetch(
        `${process.env.XATA_URL}:main/tables/userDetails/data`,
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