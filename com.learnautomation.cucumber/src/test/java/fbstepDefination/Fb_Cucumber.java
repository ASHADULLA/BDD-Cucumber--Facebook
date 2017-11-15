package fbstepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Fb_Cucumber {
	
	WebDriver driver;
	Scenario s;
	@Given ("^open facebook site$")
	public void method1()throws Exception
	{
		System.setProperty("webdriver.chrome.driver", "./chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.facebook.com/");
		Thread.sleep(3000);
	}
	@When ("enter userid as \"(.*)\" and password as \"(.*)\"$")
	public void method2(String p, String q)throws Exception
	{
		driver.findElement(By.name("email")).sendKeys(p);
		Thread.sleep(3000);
		driver.findElement(By.name("pass")).sendKeys(q);
		Thread.sleep(3000);
	}
	@Then("^click login button$")
	public void method3()throws Exception
	{
		driver.findElement(By.xpath("//input[@value='Log In']")).click();
		Thread.sleep(5000);
	}
	@And("^And validate userid with criteria \"(.*)\"$")
	public void method4(String r)throws Exception
	{
		try {
			if((r.equals("valid"))&&driver.findElement(By.xpath("(//span[text()='Ashadulla'])[1]")).isDisplayed())
				{
					s.write("Login Successful");
				}
				else if(r.equals("invalid")&&driver.findElement(By.xpath("//*[starts-with(text(),'The email address or phone number')]")).isDisplayed())
				{
					s.write("User id validation successful");
				}
				
				else{
					s.write("Userid Test was failed");
				}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			s.write("Userid Test Interrupted");
		}
		}
	@And("^validate password with criteria \"(.*)\"$")
	public void method5(String r)throws Exception{
		 try {
			if(r.equals("invalid")&&driver.findElement(By.xpath("//*[starts-with(text(),'The password that ')]")).isDisplayed())
				{
				s.write("Password vallidatin succesful");	
				}
			 else{
				 s.write("Password test failed");
			 }
		} catch (Exception e) {
			// TODO Auto-generated catch block
			s.write("Password Test Interupted");
		}
		
			}
	@After
	public void method6()throws Exception
	{
	Thread.sleep(3000);
	driver.close();
	}
}

