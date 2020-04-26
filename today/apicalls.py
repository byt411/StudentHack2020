import requests
import json


def getCases(country):
    try:
        url = "https://covid-19-data.p.rapidapi.com/country"

        querystring = {"format": "undefined", "name": country}

        headers = {
            'x-rapidapi-host': "covid-19-data.p.rapidapi.com",
            'x-rapidapi-key': "4c508736f5mshdd28282b9bf562bp1c87cejsn621e2b806328"
        }

        response = requests.get(url, headers=headers, params=querystring)
        parsed_response = json.loads(response.text)[0]
        confirmed = parsed_response['confirmed']
        critical = parsed_response['critical']
        deaths = parsed_response['deaths']
        recovered = parsed_response['recovered']
        return confirmed, critical, deaths, recovered

    except:
        print(country, "not found")
        return 0, 0, 0, 0
