

package StepDefinitions;


import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class loginStepdefinitions {

    public WebDriver driver;
    @Given("^browser is open$")
    public void browser_is_open() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("broser is open");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\lasya\\Desktop\\SeleniumDemo1\\src\\main\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }

    @And("^user is on cvlibrary page$")
    public void user_is_on_cvlibrary_page() {
        
        driver.navigate().to("https://www.cv-library.co.uk/");
    }

    @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"and \"([^\"]*)\"$")
    public void user_enters_and_Vipullasya(String keywords, String location,String distance) throws Throwable {
       
        driver.findElement(By.id("keywords")).sendKeys(keywords);
        driver.findElement(By.id("location")).sendKeys(location);
        driver.findElement(By.id("distance")).sendKeys("distance");

    }
    @And("^user clicks on search button$")
    public void user_clicks_on_login_button() throws InterruptedException {
        WebElement loginBtn=  driver.findElement(By.id("hp-search-btn"));

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", loginBtn);
        Thread.sleep(3000);
    }

    @Then("^user is navigated to search results and close the browser$")
    public void close_the_browser()
    {
        System.out.println("user is navigated to search results");
        driver.quit();
    }

}
