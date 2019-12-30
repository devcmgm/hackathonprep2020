#
# Simple Demo HTTP Request to get JSON Data
#

import requests;
import json;

url = 'https://n161.tech/api/dummyapi/user'

api_response = requests.get(url)

if api_response.status_code != 200:
    # This means something went wrong.
    raise ApiError('GET /tasks/ {}'.format(resp.status_code))

jsondata = api_response.json();

# debug --- print(jsondata);
print("id,title,firstname,lastname,image");
for item in jsondata['data']:
    print("\"{}\",\"{}\",\"{}\",\"{}\",\"{}\"".format(item['id'],item['nameTitle'],item['firstName'],item['lastName'],item['image']));

