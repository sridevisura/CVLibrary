package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(

        features = "C:\\Users\\lasya\\CucumberFramework\\src\\main\\java\\Features\\login1.feature",//path of the feature file
        glue={"StepDefinitions"},//path of stepdefinitions package
        format = {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
        monochrome = true,//readable format
        strict = true,
        dryRun = false

)

public class TestRunner {


}
