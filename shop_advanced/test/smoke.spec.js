import welcomeScreen from "../screenObjects/WelcomeScreenObject";
import mainScreen from "../screenObjects/MainScreenObject";
import Gestures from "../hepers/gestures";

describe("Main Screen functionality", () => {
  beforeEach(async () => {
    await browser.activateApp("cz.alza.eshop");
    await welcomeScreen.clickOnSkipBtn();
  });

  afterEach(async () => {
    // Close the app after each test
    await browser.closeApp();
  });

  it("Gestures: scroll, swipe", async () => {
    await expect(mainScreen.searachField).toBeDisplayed();
    // Up swipe gesture
    await browser.pause(3000);
    await Gestures.swipeUp(0.85);
    // Down swipe gesture
    await Gestures.swipeDown(0.75);
    await browser.pause(3000);
    await Gestures.swipeUp(0.85);
    await expect(mainScreen.computerAndLaptopsSection).not.toBeDisplayed();
    await mainScreen.clickOnProductCard();
    await browser.pause(3000);
    await expect(mainScreen.productVariantsDetail).toBeDisplayed();
    //swipe gesture
    await Gestures.swipeLeft(0.8);
    await Gestures.swipeUp(0.85);
    await Gestures.swipeDown(0.75);
    await Gestures.swipeRight(0.5)
  });
});


//   adb uninstall io.appium.uiautomator2.server