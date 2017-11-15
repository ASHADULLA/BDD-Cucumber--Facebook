package fbrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(features="fbfeatures",glue={"fbstepDefination"},plugin={"html:target/cucumber-html-report"})
	public class Fb_Runner
	{    
		
	}
