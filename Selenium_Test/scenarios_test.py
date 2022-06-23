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

BASE_URL = "http://213.199.129.9:3000"
driver_manager = None


@scenario('zap.feature', 'Login - Success')
def test_publish():
    pass

@scenario('zap.feature', 'Make a purchase')
def test_publish2():
    print("gamer")
    pass

@given("I'm on the Zap page")
def start():
    print("start")
    global driver_manager
    driver_manager = Driver()

@when(parsers.parse("I'm on {page} page"))
def go_to_page(page):
    driver_manager.redirect(f"{BASE_URL}/{page}")
    
@when(parsers.parse("I enter the username: {username}"))
def insert_username(username):
    driver = driver_manager.driver
    driver.find_element(By.ID, ":r0:").send_keys(username)
    
@when(parsers.parse("the password: {password}"))
def insert_username(password):
    driver = driver_manager.driver
    driver.find_element(By.ID, ":r1:").send_keys(password)
    
@when("click the login button")
def click_login_button():
    driver = driver_manager.driver
    driver.find_element(By.CSS_SELECTOR, ".MuiButton-fullWidth").click()
        
@when(parsers.parse("I search for the name {name}"))
def filter_product_by_name(name):
    driver = driver_manager.driver
    driver.find_element(By.ID, ":r1:").send_keys(name)

@when(parsers.parse("I search for the category {category}"))
def filter_product_by_name(category):
    driver = driver_manager.driver
    driver.find_element(By.ID, ":r2:").send_keys(category)
    
@when("I click the first product")
def click_first_product():
    driver = driver_manager.driver
    driver.find_element(By.CSS_SELECTOR, ".MuiTypography-h5").click()
    print("sussy first product")
    

@when(parsers.parse("I buy {quantity:d} of the product"))
def buy_quantity(quantity):
    driver = driver_manager.driver
    driver.find_element(By.ID, ":r3:").send_keys(str(quantity))
    driver.find_element(By.CSS_SELECTOR, ".MuiButton-sizeLarge").click()
    
    
@then(parsers.parse("I'm redirected to {page} page"))
def go_to_page(page):
    time.sleep(1)
    if page == "dashboard":
        page = ""
    driver = driver_manager.driver
    assert driver.current_url == f"{BASE_URL}/{page}"
    
@then(parsers.parse("have {username} present in the navbar"))
def go_to_page(username):
    time.sleep(1)
    driver = driver_manager.driver
    assert driver.find_element(By.CSS_SELECTOR, ".MuiChip-label").text == username
    
@then(parsers.parse("product name should contains {name}")   )
def assert_product_name(name):
    print("sussy product name", name)
    time.sleep(1)
    driver = driver_manager.driver
    assert name in driver.find_element(By.CSS_SELECTOR, ".MuiTypography-h4").text
    
@then(parsers.parse("cart should contains {name}"))
def assert_cart_product_name(name):
    print("sussy cart product name")
    driver = driver_manager.driver
    assert name in driver.find_element(By.CSS_SELECTOR, ".MuiDataGrid-row:nth-child(1) > .MuiDataGrid-cell:nth-child(2) > .MuiDataGrid-cellContent").text
    driver.find_element(By.CSS_SELECTOR, ".MuiDataGrid-row:nth-child(1) .MuiButton-root").click()
    
@then("I close the driver")
def close():
    driver_manager.close()