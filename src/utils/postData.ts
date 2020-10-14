async function postData(
  url: string,
  body: any,
  additionalHeaders?: { [header: string]: string }
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...additionalHeaders,
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

export default postData;
