import fetch from 'node-fetch';

async function fetchGoogleAPI()
{
    const res = await fetch("https://www.google.com/");
    console.log(res);
}

fetchGoogleAPI();