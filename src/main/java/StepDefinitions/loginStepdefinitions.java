
package StepDefinitions;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class loginStepdefinitions {

    public WebDriver driver;
    @Given("^user is already on search page$")
    public void user_already_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\lasya\\Desktop\\SeleniumDemo1\\src\\main\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.cv-library.co.uk/");
    }
  /*  @When("^title of login Job Search - Find 175,000 UK jobs on CV-Library")
    public void title_of_login_page_is_free_CRM() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals(title,  "Job Search - Find 175,000 UK jobs on CV-Library");
    }*/
 @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"and \"([^\"]*)\"$")
  public void user_enters_and_Vipullasya(String keywords, String location,String distance) throws Throwable {
      // Write code here that turns the phrase above into concrete actions
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

    @Then("^close the browser$")
    public void close_the_browser()
    {
        driver.quit();
    }

}