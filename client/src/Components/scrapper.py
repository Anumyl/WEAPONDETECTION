import pandas as pd
import os
from bs4 import BeautifulSoup
from selenium import webdriver
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

def scrape(driver):
    try:
        time.sleep(3)
        #upload folder to ipfs
        driver.find_element_by_id("directory-input").send_keys("D:/PSG/SEM7/PHASE1/DOCUMENTATION/CODE/WEAPON DETECTION/WeaponImages")
        time.sleep(5)
        #navigate into folder
        driver.find_element_by_xpath("//button[@class='relative pointer flex items-center flex-grow-1 ph2 pv1 w-40']").click()
        time.sleep(5)
        #fetch hash
        elements = driver.find_elements_by_xpath("//div[@class='f7 mt1 gray truncate monospace']")
        e =[]
        for i in elements:
        	element_content = i.get_attribute('innerHTML')
        	e.append(element_content)
        #print hashes
        #print(e)
    except TimeoutException:
        print("IPFS took too much loading time!")

    return e
