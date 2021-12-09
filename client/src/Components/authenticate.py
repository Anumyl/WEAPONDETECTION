from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from webdriver_manager.chrome import ChromeDriverManager

def login():
    driver = webdriver.Chrome(ChromeDriverManager().install())
    url = r'http://localhost:5001/ipfs/bafybeihcyruaeza7uyjd6ugicbcrqumejf6uf353e5etdkhotqffwtguva/#/files'
    driver.get(url)
    return driver