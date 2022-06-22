from pytest_bdd import scenario, given, when, then, parsers

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.chrome.service import Service as ChromiumService
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType
from test_loginasLucius import Driver

import time

BASE_URL = "http://localhost:3000"
driver_manager = Driver()


@scenario('zap.feature', 'Login - Success')
def test_publish():
    pass

@given("I'm on the Zap page")
def start():
    print("start")

@when(parsers.parse("I'm on {page} page"))
def go_to_page(page):
    driver_manager.redirect(f"{BASE_URL}/{page}")
    
@when(parsers.parse("I enter the username: {username}"))
def insert_username(username):
    driver = driver_manager.driver
    driver.find_element(By.ID, "username").send_keys(username)
    
@when(parsers.parse("the password: {password}"))
def insert_username(password):
    driver = driver_manager.driver
    driver.find_element(By.ID, "password").send_keys(password)
    
@when("click the login button")
def click_login_button():
    driver = driver_manager.driver
    driver.find_element(By.CSS_SELECTOR, ".MuiButton-fullWidth").click()
        
    
@then(parsers.parse("I'm redirected to {page} page"))
def go_to_page(page):
    print("sussy page", page)
    
@then(parsers.parse("have {username} present in the navbar"))
def go_to_page(username):
    print("sussy page", username)
    time.sleep(1)
    driver = driver_manager.driver
    driver.find_element(By.CSS_SELECTOR, ".MuiChip-label").text == username
    
@then("I close the driver")
def close():
    driver_manager.close()