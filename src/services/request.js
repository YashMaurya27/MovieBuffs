export const BASE_URL = "https://moviesdatabase.p.rapidapi.com/";
// headers = {
//     'X-RapidAPI-Key': '7cace1b18cmshc1b620caa874f1dp195854jsn830d743ed466',
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// };
export const GET = (endpoint, params = {}, fullURL = false) => {
  let url = "";
  if (!fullURL) {
    url = BASE_URL + endpoint;
  } else {
    url = endpoint;
  }
  const paramKeys = Object.keys(params);
  if (paramKeys.length > 0) {
    url += "?";
    Object.keys(params).forEach((item, index) => {
      url += item + "=" + params[item];
      if (index < paramKeys.length - 1) url += "&";
    });
  }
  return fetch(url, {
    method: "GET",
    // ...headers
    headers: {
      "X-RapidAPI-Key": "7cace1b18cmshc1b620caa874f1dp195854jsn830d743ed466",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((e) => {
      // if (e.status === 'ok') {
      return {
        success: true,
        message: "Data fetched",
        data: e,
      };
      // }
    })
    .catch((e) => {
      return { success: false, message: "Something went wrong", data: [] };
    });
};
