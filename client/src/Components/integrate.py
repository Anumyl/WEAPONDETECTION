from authenticate import login
from scrapper import scrape
import os
import json

driver = login()
e = scrape(driver)
m = json.dumps(e)
command = "node middle.js " + m
os.system(command)